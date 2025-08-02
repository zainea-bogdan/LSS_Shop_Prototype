const express=require('express');
const router=express.Router(); //conect the server to the router

const OrderController=require('../controllers/order.controller');//creates variable for the controller of the order

//creates methods for orders, they will be part of the order controller
router.get('/', OrderController.getOrders);
router.get('/:id', OrderController.getOrderByID);
router.post('/', OrderController.createOrder);
router.delete('/:id', OrderController.deleteOrder);
router.patch('/:id', OrderController.updateDeliveryStatus);

module.exports=router;//it exports the routes that have been created in this file
