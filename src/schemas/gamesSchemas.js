import joi from "joi";

const gamesSchema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
  image: joi.string().required(),
  stockTotal: joi.number().required(),
  categoryId: joi.number().required(),
  pricePerDay: joi.number().required(),
  categoryName: joi.string().required(),
});

export default gamesSchema;
