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


export async function addRentals(req,res){
  const {customerId, gameId, daysRented } = req.body;
try{


  db.query(`
    INSERT INTO 
        rentals ("gameId", "customerId", "daysRented")
    VALUES ($1, $2, $3)
    `[customerId, gameId, daysRented])
    res.sendStatus(201)

} catch(error) {
    console.log(error)
    res.status(500).send(error)
}}