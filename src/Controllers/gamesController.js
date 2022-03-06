import db from "../db.js";

export async function getGames(req, res) {
  const { name } = req.query;

  try {
    if (!name) {
      const { rows: games } = await db.query(`
        SELECT 
          games.*, 
          categories.name as "categoryName" 
        FROM games 
          JOIN categories ON games."categoryId"=categories.id
      `);

      res.send(games);
    } else {
      const { rows: games } = await db.query(`
        SELECT 
          games.*, 
          categories.name as "categoryName" 
        FROM games 
         JOIN categories ON games."categoryId"=categories.id 
        WHERE LOWER(games.name) LIKE LOWER($1)
      `, [`${name}%`]);

      res.send(games);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addGame(req, res) {
  try {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  const result = await db.query(`SELECT id FROM games WHERE name=$1`, [name]);
  if (result.rows.length > 0) {
    return res.status(409).send('Jogo já cadastrado')
  }

    await db.query(`
      INSERT INTO games 
        (name, image, "stockTotal", "categoryId", "pricePerDay") 
      VALUES
         ($1, $2, $3, $4, $5)`,
      [
        name,
        image,
        stockTotal,
        categoryId,
        pricePerDay,
      ]);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
