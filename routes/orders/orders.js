
const express = require('express');
const { render } = require('ejs');

const OrdersController = require('../../controllers/orders/orders');
const authToken = require('../../middlewares/auth-token');

const router = express.Router();
const ordersController = new OrdersController();

router.get('/business', authToken, ordersController.getOrderRequests);
router.get('/customers', authToken, ordersController.getCustomerOrders);
router.get('/companies', authToken, ordersController.getCompanyOrders);
router.put('/accept/:orderId', authToken, ordersController.acceptRequest);
router.put('/:orderId', authToken, ordersController.changeStatus);
router.get('/', ordersController.getOrders);
router.post('/', ordersController.createOrders);


module.exports = router;
