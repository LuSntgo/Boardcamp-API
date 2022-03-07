import db from "../db.js";
import dayjs from "dayjs";
import Joi from "joi";
import rentalSchema from "../schemas/rentalSchema.js";

export async function getRentals(req, res) {
  const { customerId, gameId } = req.query;
  try {
    const { rows: rentals } = await db.query(`
    SELECT 
      rentals.*,
      customers.name AS "customerName",
      customers.id AS "customerId",
      games.id AS "gameId",
      games.name AS "gameName", 
      categories.name AS "categoryName", 
      categories.id AS "categoryId" 
    FROM rentals
      JOIN customers ON rentals."customerId" = customers.id
      JOIN games ON rentals."gameId" = games.id
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
    console.log(error)
    res.sendStatus(500);
  }
}

export async function addRentals(req, res) {
  const {error} = rentalSchema.validate(req.body);
  if(error){
    return res.sendStatus(400)
  }

  const { customerId, gameId, daysRented } = req.body;
  const rentDate = dayjs().format("YYYY-MM-DD");
  const returnDate = null;
  const delayFee = null;


  try {
    const { rows: pricePerDay } = await db.query(
      `
    SELECT 
      games."pricePerDay" 
    FROM games 
      WHERE id=$1
    `,
      [gameId]
    );

    const rentalPrice = pricePerDay[0].pricePerDay * daysRented;

    await db.query(
      `
    INSERT INTO 
      rentals("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")  
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        customerId,
        gameId,
        rentDate,
        daysRented,
        returnDate,
        rentalPrice,
        delayFee,
      ]
    );
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function returnRental(req, res) {
  const { id } = req.params;
  const returnDate = dayjs().format("YYYY-MM-DD");

  try {
    const { rows: result } = await db.query(`
  SELECT rentals.*,
    games."pricePerDay" AS price 
  FROM rentals
    JOIN games ON games.id=rentals."gameId"
    WHERE rentals.id=$1
  `,
      [id]
    );
    if (result.length === 0) {
      return res.sendStatus(404);
    }
  
    if (result[0].returnDate !== null) {
      return res.sendStatus(400);
    }
    const pricePerDay =
      parseInt(result[0].originalPrice) / parseInt(result[0].daysRented);

    const rentDate = dayjs(result[0].rentDate);
    const daysDelayed = dayjs().diff(rentDate, "days");
    const delayFee = daysDelayed * pricePerDay;

    await db.query(`
  UPDATE rentals
    SET "returnDate"=$1,
        "delayFee" = $2
    WHERE id=$3
  `,
      [returnDate, delayFee, id]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}
export async function deleteRental(req, res) {
  const { id } = req.params;
  try {
    const { rows: rental } = await db.query(
      `
    SELECT * 
    FROM rentals 
    WHERE id = $1`,
      [id]);

      if (rental.length === 0) {
        return sendStatus(404);}

        console.log(rental[0].returnDate)
    if (rental[0].returnDate) {
      return res.sendStatus(400)};

    await db.query(`
    DELETE 
    FROM rentals 
    WHERE id=$1
    `,[id]);
    res.sendStatus(200);
  } catch(error) {
    console.log(error)
    res.sendStatus(500);
  }
}