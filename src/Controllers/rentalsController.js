import db from "../db.js";

export async function getRentals(req, res) {
  try {
    const { rows: rentals } = db.query("SELECT * FROM rentals ");
    res.send(rentals);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
