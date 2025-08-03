const express=require('express');//import the express library
const router=express.Router();//create a router to manage our routes

const ItemController=require('../controllers/item.controller') //bring in the code that handles all the item logic

router.get('/', ItemController.getItems) //accesses all data about items
router.get('/:id', ItemController.getItemByID); //method that accesses an item by id
router.post('/', ItemController.createItem);//creates a new item
router.delete('/:id', ItemController.deleteItem);//deletes an item
router.patch('/:id', ItemController.updatePriceItem);//updates a part of the item, in our case the price

module.exports=router;//export this router so other files can use it