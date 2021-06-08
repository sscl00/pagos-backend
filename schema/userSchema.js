// import Joi from 'joi';
const Joi = require('joi')
    .extend(require('@joi/date'));

const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthday: Joi.date().format('DD-MM-YYYY').required(),
    contact_phone: Joi.array().items(
        Joi.object({
            label: Joi.string().required(),
            phone: Joi.string().required()
        })
    ),
    isActive: Joi.boolean().required()
});

const filterUserSchema = Joi.object({
    filter: Joi.string().required()
});


export default {
    userSchema, 
    filterUserSchema
}