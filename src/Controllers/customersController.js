import db from "../db.js";

export async function getCustomers(req, res) {
  const cpf = req.query.cpf;

  try {
    if(!cpf){
      const { rows: customers } = await db.query(`
      SELECT * 
      FROM customers
      `);
      res.send(customers);
    } else {
    const { rows: customers } = await db.query(`
    SELECT * 
    FROM customers
    WHERE cpf LIKE $1
    `, [`${cpf}%`]);
    res.send(customers);
   }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addCustomers(req, res) {
  try {

    const { name, phone, cpf, birthday } = req.body;

    const result = await db.query(`SELECT id FROM customers WHERE cpf=$1`, [cpf]);
    if (result.rows.length > 0) {
      return res.status(409).send('Cliente já cadastrado')
    }

    await db.query(`
    INSERT 
    INTO customers
      (name, phone, cpf, birthday)
    VALUES ($1, $2, $3, $4) 
    `, [
      name,
      phone,
      cpf,
      birthday
    ]);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getCustomer(req, res) {
  const { id } = req.params

  try {
      const { rows: customer } = await db.query(`
      SELECT * 
      FROM customers
      WHERE id=$1
      `,[id]);

      if(customer.length===0){
        return res.sendStatus(404);
      }
      res.send(customer[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updateCustomer(req, res) {
  const { id } = req.params
  const { name, phone, cpf, birthday } = req.body;

  try{
    await db.query(`
    UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4
    WHERE customers.id=$5
    ` [name, phone, cpf, birthday, id]);

    res.sendStatus(200);
  }catch(error){
    console.log(error)
    res.sendStatus(500)
  }
}

