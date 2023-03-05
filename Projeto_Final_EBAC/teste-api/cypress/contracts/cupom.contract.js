const Joi = require('joi')

const cuponsSchema = Joi.object({
    id: Joi.number(),
    code: Joi.string(),
    amount: Joi.string(),
    date_created: Joi.string(),
    date_created_gmt: Joi.string(),
    date_modified: Joi.string(),
    date_modified_gmt: Joi.string(),
    discount_type: Joi.string(),
    description: Joi.string(),
    date_expires: Joi.string(),
    date_expires_gmt: Joi.string(),
    usage_count: Joi.number(),
    individual_use: Joi.boolean(),
    product_ids: Joi.array().items(Joi.number()),
    excluded_product_ids: Joi.number(),
    usage_limit: Joi.number(),
    usage_limit_per_user: Joi.number(),
    limit_usage_to_x_items: Joi.number(),
    free_shipping: Joi.number(),
    product_categories: Joi.array().items(Joi.number()),
    excluded_product_categories: Joi.array().items(Joi.number()),
    exclude_sale_items: Joi.boolean(),
    minimum_amount: Joi.string(),
    email_restrictions: Joi.array().items(Joi.string()),
})
export default cuponsSchema;