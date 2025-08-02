const express=require("express")
const AppRoutes=require('./routes/index')//it acceses the routes created in index for shop and order
const DatabaseService=require('./services/database.service')//accesses the database service which connect the database from mongodb with the shop service

require('./config/shops')
const dotenv=require('dotenv')
dotenv.config(); //it accesses the data about shops from config folder

console.log(process.env.MONGO_CONNECTION_STRING) //we haven't yet the data about shops in MongoDB

const app=express();//connect the app to the server
const port=3000;// me donno if this is correct

//we use express.json before /api approutes
app.use(express.json());//i think this is for json format of the objects, like the server access json files, me donno if is correct
app.use(express.urlencoded({extended: true}));//and this i think is for localhost, me donno :)
app.use('/api', AppRoutes); //this part is for conect express with app routes

app.get("/", (req, res)=> {
    res.send("Welcome to our project LSS Shop Prototype!");
}) //that's a checkout, kinda

app.listen(port, async ()=>{
    console.log(`Server is running on http://localhost:${port}`);//this is part of the devops
    await DatabaseService.connectToMongoDB();//it waits to connect to the data base from mongodb
})