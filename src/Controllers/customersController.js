import db from "../db.js";

export async function getCustomers(req, res) {
  try {
    const { rows: customers } = db.query("SELECT * FROM customers ");
    res.send(customers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
