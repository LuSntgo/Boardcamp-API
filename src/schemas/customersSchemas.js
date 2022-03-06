import joi from "joi";

const customersSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  cpf: joi.string().required(),
  birthday: joi.number().required(),
});

export default customersSchema;