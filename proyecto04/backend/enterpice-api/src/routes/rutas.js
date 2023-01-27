import { Router } from 'express';
import { sequelize } from '../database/database.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({hola: 'mundo'});
});

router.get('/customers', (req, res) => {
    sequelize.models.customers.findAll()
    .then(customers => {
        res.json(customers);
    })
    .catch(error => {
        res.json(error);
    });

});

// ruta para obtener un solo cliente
router.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    sequelize.models.customers.findOne({
        where: {
            customerNumber: id
        }
    })
    .then(customer => {
        res.json(customer);
    })
    .catch(error => {
        res.json(error);
    });
});


export default router;