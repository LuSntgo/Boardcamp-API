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


export async function addCategory(req, res) {
  const {name} = req.body;
  
  try {
    await db.query(`
      INSERT INTO categories (name)
      VALUES ($1), [name]
      `);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

