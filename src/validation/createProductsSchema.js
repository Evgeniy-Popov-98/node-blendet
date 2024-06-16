import Joi from "joi";

export const createProductsSchema = Joi.object({
  name: Joi.string().required().min(3).max(20).messages({
    "string.min": "Min string is not fulfilled!",
    "string.max": "Max string is not fulfilled!",
  }),
  price: Joi.number().required(),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});
