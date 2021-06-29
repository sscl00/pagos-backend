// import Joi from 'joi';
const Joi = require('joi')
    .extend(require('@joi/date'));

Joi.objectId = require('joi-objectid')(Joi)

const courseSchema = Joi.object({
    name: Joi.string().required(),
    start_date: Joi.date().format('DD-MM-YYYY').required(),
    end_date: Joi.date().format('DD-MM-YYYY').required(),
    start_time: Joi.string(),
    end_time: Joi.string(),
    students: Joi.array().items(
        Joi.object({
            student_id: Joi.objectId(), 
            grade: Joi.number().min(0).max(10),
            payment_id: Joi.objectId(), 
        })
    ),
    price: Joi.number().precision(2).min(0).max(4000).required(),
    classroom: Joi.string()
});

const filterCourseSchema= Joi.object({
     filter: Joi.string().required()
});


export default {
    courseSchema, 
    filterCourseSchema
}