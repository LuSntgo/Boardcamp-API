import joi from "joi";


const customersSchema = joi.object({
  name: joi.string().required().min(2),
  phone: joi.string().pattern(new RegExp('^[0-9]{10,11}')).required(),
  cpf : joi.string().pattern(new RegExp('^[0-9]{11}')).required(),
  birthday: joi.string().pattern(new RegExp(/^\d{4}\-\d{2}\-\d{2}$/)).required(),
});

export default customersSchema;