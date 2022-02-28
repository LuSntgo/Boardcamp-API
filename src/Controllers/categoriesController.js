import db from "../db.js";

export async function getCategories(req, res) {
  try {
    const { rows: categories } = db.query("SELECT * FROM categories ");
    res.send(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


export async function getCategory(req, res) {
  const { id } = req.body;
  try {
    const { rows: games } = await db.query(
      `
    SELECT * FROM games
    WHERE id=$1`,
      [id]
    );

    if (games.length === 0) {
      res.sendStatus(404);
      return;
    }
    res.send(games[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// export async function addCategory(req, res) {
//   try {
//     await db.query(`
//       INSERT INTO games (id, name, image, stockTotal, categoryId, pricePerDay, categoryName)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//       `);
//     res.sendStatus(201);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// }

