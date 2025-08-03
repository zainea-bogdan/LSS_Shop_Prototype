const {MongoClient}=require('mongodb');// this line gets the tool we need to talk to a MongoDB database

const Constants={// this is a place to store important, unchanging information
    DB: null,// this will hold a connection to our database once we are connected
    CLIENT: null,// this will hold the main client that connects to the database
}

const DatabaseService={// this is where we put all the code that handles talking to our database
    connectToMongoDB: async ()=>{// this function connects our app to the MongoDB database
        console.log("Connecting to MongoDB..")// we print a message to the console so we know it's trying to connect
        Constants.CLIENT=await MongoClient.connect(process.env.MONGO_CONNECTION_STRING);// we wait for the connection to the database to happen using our secret key

        Constants.DB=Constants.CLIENT.db('LssShopPrototype');// we tell the client to use the 'LssShopPrototype' database

        return Constants.DB;// we send back the database connection
    },

    goToCollection: async (collectionName)=>{// this function helps us get to a specific collection (like 'items')
        if(!Constants.DB)// we check if we are already connected to the database
        {
            await DatabaseService.connectToMongoDB();// if not, we connect to it first
        }

        return Constants.DB.collection(collectionName);// we get the collection by its name and send it back
    },
};

module.exports=DatabaseService;// we export all this code so our other files can use it
