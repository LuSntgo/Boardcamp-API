import db from "../db.js";
import dayjs from "dayjs";

export async function getRentals(req, res) {
  const { customerId, gameId } = req.query;
  try {
    const { rows: rentals } = await db.query(`
    SELECT 
      rentals.*,
      customers.name AS "customerName",
      customer.id AS "customerId",
      games.id AS "gameId",
      games.name AS "gameName",
      games."categoryId" categories.name AS "categoryName" 
    FROM rentals
      JOIN customers ON rentals."customerId" = customers.id
      JOIN games ON rentals."gamesId" = games.id
      JOIN categories ON games."categoryId" = categories.id
      ${customerId ? `WHERE customers.id = ${parseInt(customerId)}` : ""}
      ${gameId ? `WHERE games.id = ${parseInt(gameId)}` : ""}
    `);

    const listRentals = rentals.map((r) => {
      const entry = {
        ...r,
        rentDate: dayjs(r.rentDate).format("YYYY-MM-DD"),
        customer: {
          id: r.customerId,
          name: r.customerName,
        },
        game: {
          id: r.gameId,
          name: r.gameName,
          categoryId: r.categoryId,
          categoryName: r.categoryName,
        },
      };
      delete entry.customerId;
      delete entry.customerName;

      delete entry.gameId;
      delete entry.gameName;

      delete entry.categoryId;
      delete entry.categoryName;

      return entry;
    });
    res.send(listRentals);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function addRentals(req, res) {
  const { customerId, gameId, daysRented } = req.body;
  const rentDate = dayjs().format('YYYY-MM-DD');

  try {
    const{ rows: pricePerDay } = await db.query(`
    SELECT 
      games."pricePerDay" 
    FROM games 
      WHERE id=$1
    `,[gameId]);

    await db.query(`
    INSERT INTO 
      rentals("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")  
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,[customerId, gameId, rentDate, daysRented, null, pricePerDay.pricePerDay * daysRented, null]);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

