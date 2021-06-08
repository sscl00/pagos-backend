// dependencies router
import express from 'express';
import ResourcesService from '../../services/ResourcesService';
import validation from '../../middleware/validationHandlers';
import UserSchema from '../../schema/userSchema';

// other dependencies
import Response from '../../utils/log';

// routes configuration
const router = express.Router();
const service = new ResourcesService('User');
const { userSchema, filterUserSchema } = UserSchema

router.get(
    '/',
    async (req, res, next) => {
        try {
            const userList = await service.getResource();
            Response.success('users listed');

            res.status(200).send(userList);
        } catch (error) {
            next(error);
        }
    }
);

router.get(
    '/:filter',
    validation(filterUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const [user] = await service.getResource(req.params);
            user ? Response.success('user listed') : Response.error(`No se encontraron coincidencias: ${req.params.filter}`);
            res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    }
);

// create new user
router.post(
    '/', 
    validation(userSchema),
    async (req, res, next) => {
    try {
        const userCreated = service.createResource(req.body);
        Response.success('user created');
        res.status(201).send(userCreated);
    } catch (error) {
        next(error);
    }
});
export default router;