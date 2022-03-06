import db from "../db.js";

export async function getCustomers(req, res) {
  const { cpf } = req.query;
  try {

    if(!cpf){

    }

    const { rows: customers } = db.query("SELECT * FROM customers ");
    res.send(customers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

