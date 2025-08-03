const express=require("express")//import the express library to help set up the server
const AppRoutes=require('./routes/index')//it brings in the routes we made for the shop and orders
const DatabaseService=require('./services/database.service')//it brings in our code to connect to the database

const dotenv=require('dotenv');//this library helps us use a file with secret stuff, like our database password
dotenv.config()//this loads the secret stuff from that file

console.log(process.env.MONGO_CONNECTION_STRING) //this just prints our database connection string to the console to check if it's there

const app=express();//we create our app using express
const port=3000;//this is the port number our server will run on

//we use these two lines to handle data that comes in, use express.json before /api AppRoutes
app.use(express.json());//this makes sure our app can understand JSON data
app.use(express.urlencoded({extended: true}));//and this helps it understand data from forms and urls
app.use('/api', AppRoutes); //this tells our app to use our routes for anything that starts with '/api'

app.get("/", (req, res)=> {//when someone goes to the home page ('/'), this code runs
    res.send("Welcome to our project LSS Shop Prototype!");//it sends this message back to the user
});

app.listen(port, async ()=>{//this starts our server on the port we chose
    console.log(`Server is running on http://localhost:${port}`);//we print a message to the console so we know the server is running
    await DatabaseService.connectToMongoDB();//this waits for the database to connect before moving on
});