// This file contains all the functions that talk to the database for items.

const { ObjectId, ReturnDocument } = require('mongodb');// we need this to find things by their special ID
const DatabaseService = require('./database.service');// we bring in our database connection code

const Constants={// this is a place to store important, unchanging information
    collectionName:'items',// this is the name of the 'items' collection in our database
}

const ItemService={// this is where all our item-related functions live
    getAll: async (query)=>{// this function gets all the items from the database
        let {limit, offset}=query;// we take 'limit' and 'offset' from the URL to control how many items we get

        if(!limit){// if 'limit' wasn't given, we use a default value
             limit=10;// so we'll get 10 items by default
        }

        if(!offset){// if 'offset' wasn't given, we use a default value
            offset=0;// so we start from the very first item
        }
    
        const itemsCollection=await DatabaseService.goToCollection(Constants.collectionName);// we get access to the 'items' collection

        // we find the items, skip some, limit the number we get, and remove the _id from the result
        const items=await itemsCollection.find({},{projection:{_id:0}, limit:parseInt(limit), skip:parseInt(limit)*parseInt(offset)}).toArray();

        return items;// we send back the list of items
    },

    getById: async (params)=>{// this function gets one item using its ID
         let id=params.id;// we get the ID from the URL

         const itemsCollection=await DatabaseService.goToCollection(Constants.collectionName);// we get access to the 'items' collection
         // we find one item using its special ID
         const item=await itemsCollection.findOne({_id:ObjectId.createFromHexString(id)});

         return item;// we send back the one item we found
    },

    create: async (itemData)=>{// this function adds a new item to the database
         const itemsCollection=await DatabaseService.goToCollection(Constants.collectionName);// we get access to the 'items' collection
         await itemsCollection.insertOne(itemData);// we insert the new item's data into the collection

         return itemData;// we send back the new item's data
    },

    delete: async(id)=>{// this function deletes an item by its ID
        const itemsCollection=await DatabaseService.goToCollection(Constants.collectionName);// we get access to the 'items' collection
        // we delete one item based on its ID
        const result=await itemsCollection.deleteOne({_id:ObjectId.createFromHexString(id)});

        return result// we send back the result of the deletion
    },

    updatePrice: async (params, price)=>{// this function updates just the price of an item
        let id=params.id// we get the ID from the URL
        const itemsCollection=await DatabaseService.goToCollection(Constants.collectionName);// we get access to the 'items' collection

        // we find the item by ID and update its price
        const result=await itemsCollection.findOneAndUpdate(
            {_id:ObjectId.createFromHexString(id)}, // find the item with this ID
            {$set: {price: price['price']}},// set the new price
            {returnDocument: 'after', projection:{_id:0}}// send back the updated item, not the original
        )
        return result;// we send back the updated item
    }
}

module.exports=ItemService// we let other files use all these functions