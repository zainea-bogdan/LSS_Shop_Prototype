const express=require("express");
const router=express.Router();// connect the server to the router

const ShopRouter=require('./shop.routes')//creates variabke for the shop router
const OrderRouter=require('./order.routes')//creates variable for the order router

router.use('/shop', ShopRouter)//accesses the router of the shop
router.use('/order', OrderRouter)//accesses the router of the order

module.exports=router;//it exports the routes that have been created in this file