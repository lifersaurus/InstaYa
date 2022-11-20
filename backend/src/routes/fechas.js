const { Router } = require('express');
const router = Router();

const { getFecha, createFecha, getFechas, deleteFecha, updateFecha } = require('../controllers/fechas.controller');

router.route('/')
   
    .get(getFechas)
    .post(createFecha);

router.route('/:id')
    .get(getFecha)
    .delete(deleteFecha)
    .put(updateFecha);

module.exports = router;
