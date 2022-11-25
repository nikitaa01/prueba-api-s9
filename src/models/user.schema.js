const Joi = require('joi');

module.exports.userSchema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
    job: Joi.string().alphanum().min(5).max(50).required(),
    birthday: Joi.date().greater('1/1/2000').iso().required(),
    username: Joi.string().alphanum().min(3).max(20),
    email: Joi.when('username', {
        is: Joi.exist(),
        then: Joi.string().email().min(5).max(30),
        otherwise: Joi.string().email().min(5).max(30).required(),
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeat_password: Joi.when('password', {
        is: Joi.exist(),
        then: Joi.valid(Joi.in('password')).required(),
        otherwise: Joi.optional(),
    }),
});