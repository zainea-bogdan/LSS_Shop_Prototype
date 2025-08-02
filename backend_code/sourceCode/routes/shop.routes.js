const express=require('express');
const router=express.Router();//creates the connection with the server

const ShopController=require('../controllers/shop.controller') //creates variable for shop controller

router.get('/', ShopController.getShops) //connects router with the methods from the controller
router.get('/:id', ShopController.getShopByID); //method that accesses the shop by id

module.exports=router; //this file exports routes for shops