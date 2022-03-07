import db from "../db.js";
import customersSchema from "../schemas/customersSchemas.js";

export async function validateCustomersMiddleware(req, res, next) {

  const validation = customersSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }
  next()

}

export async function validateUpgradeCustomersMiddleware(req, res, next) {
  const validation = customersSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  const { id } = req.params;
  const { cpf } = req.body;
  
  try {         
    const user = await db.query(`
    SELECT *
    FROM customers
    WHERE cpf=$1
    `, [cpf])

if(user.rowCount > 0 && user.rows[0].id != id){
  return res.sendStatus(409)
}

} catch (error) {
    res.status(500).send(error.message);
}

next()
}