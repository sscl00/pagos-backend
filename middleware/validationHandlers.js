// other dependencies
import Response from '../utils/log';
import ServerError from '../utils/error';


// validation schema on scope
const validate = (data, schema) => {
    try {
        const { error } = schema.validate(data);
        error && Response.error(error.message);
        return error;
    } catch ({ message }) {
        Response.error(message);
    }
};

// validation error, if it differs of validation schema
const validationHandler = (schema, check = 'body') => {
    return (req, res, next) => {
        const error = validate(req[check], schema);
        error ? next(
            new ServerError('Bad Request', 400, 'ClientError').response(
                error.message
            )
        ): next();
    };
};

export default validationHandler;

