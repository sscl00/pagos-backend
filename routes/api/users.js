// dependencies router
import express from 'express';
import ResourcesService from '../../services/ResourcesService';

// other dependencies
import Response from '../../utils/log';

// routes configuration
const router = express.Router();
const service = new ResourcesService('User');

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

export default router;