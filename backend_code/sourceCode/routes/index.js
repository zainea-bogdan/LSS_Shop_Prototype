const express=require("express");//import the express library
const router=express.Router();//create a router to handle different pages

const ItemRouter=require('./item.routes')//bring in the routes we made for items
router.use('/items', ItemRouter)//use the item routes for all paths that start with '/items'

module.exports=router;//export this router so other files can use it