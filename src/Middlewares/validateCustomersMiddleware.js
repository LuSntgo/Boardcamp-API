import customersSchema from "../schemas/customersSchemas.js";


export function validateCustomersMiddleware(req, res, next) {
    const query = {
      cpf: req.query.cpf,
      name: req.query.name,
      customerId: req.query.customerId,
      gameId: req.query.gameId
    }
  
    const validation = customersSchema.validate(query)
    if (validation.error) {
      console.error(validation.error.details[0].message)
      return res.status(400).send("Os dados estão incorretos")
    }
  
    res.locals.query = query
  
    next()
  }