// dependencies router
import express from 'express';
import ResourcesService from '../../services/ResourcesService';
import validation from '../../middleware/validationHandlers';
import CourseSchema from '../../schema/courseSchema';

// other dependencies
import Response from '../../utils/log';

// routes configuration
const router = express.Router();
const service = new ResourcesService('Course');
const { courseSchema, filterCourseSchema } = CourseSchema;

router.get(
    '/',
    async (req, res, next) => {
        try {
            const courseList = await service.getResource();
            Response.success('courses listed');

            res.status(200).send(courseList);
        } catch (error) {
            next(error);
        }
    }
);

router.get(
    '/:filter',
    validation(filterCourseSchema, 'params'),
    async (req, res, next) => {
        try {
            const [course] = await service.getResource(req.params);
            course ? Response.success('course listed') : Response.error(`No se encontraron coincidencias: ${req.params.filter}`);
            res.status(200).send(course);
        } catch (error) {
            next(error);
        }
    }
);

router.get(
    '/id/:filter',
    validation(filterCourseSchema, 'params'),
    async (req, res, next) => {
        try {
            const [course] = await service.getResourceByID(req.params);
            course ? Response.success('course listed') : Response.error(`No se encontraron coincidencias: ${req.params.filter}`);
            res.status(200).send(course);
        } catch (error) {
            next(error);
        }
    }
);

// create new course
router.post(
    '/', 
    validation(courseSchema),
    async (req, res, next) => {
    try {
        const courseCreated = service.createResource(req.body);
        Response.success('course created');
        res.status(201).send(courseCreated);
    } catch (error) {
        next(error);
    }
});
export default router;