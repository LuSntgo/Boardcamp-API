import joi from "joi";


const customersSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  cpf: joi.string().length(11).required(),
  birthday: joi.date().format('DD-MM-YYYY')
});

export default customersSchema;