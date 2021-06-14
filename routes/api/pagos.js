import express from 'express';
import ResourcesService from '../../services/ResourcesService';
import validation from '../../middleware/validationHandlers';
import pdf from 'html-pdf';

import recibo from '../../templates/recibo';

// routes configuration
const router = express.Router();
const service = new ResourcesService('User');

// const content = `
// <h1>Título en el PDF creado con el paquete html-pdf</h1>
// <p>Generando un PDF con un HTML sencillo</p>
// `;

const options = {
    "border": {
        "top": "2.5cm",            // default is 0, units: mm, cm, in, px
        "right": "2cm",
        "bottom": "2.5cm",
        "left": "2cm"
  }, 
  "height": "19cm",        // allowed units: mm, cm, in, px
  "width": "25cm",
};


// Crear archivo
router.get(
    '/',
    async (req, res, next) => {
    try {
        const content = recibo("");
        pdf.create(content, options).toFile('./temp/recibo.pdf', function(err, res) {
            if (err){
                console.log(err);
            } else {
                console.log(res);
            }
        });
        res.status(200).send("Listo");
    } catch (error) {
        console.log(error)
        next(error);
    }
});

export default router;