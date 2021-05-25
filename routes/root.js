// dependencies router
import express from 'express';

// routes configuration
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hola :D");
});

export default router;