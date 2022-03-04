import db from "../db.js";

export async function validateCategoryMiddleware(req, res, next) {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }
  try {
    const invalidName = await db.query("SELECT id FROM categories WHERE name=$1", [
      name,
    ]);

    if (invalidName.rowCount > 0) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}