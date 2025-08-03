const Joi=require('joi')//import the joi library for schema validation

const ItemService=require('../services/item.service');//import ItemService which will interact with data

const ItemController={//holds all the controller methods
    getItems: async (req, res)=>{//controller method to get all items
        const query=req.query;//extract query parameters from the request

        const items=await ItemService.getAll(query);//call the service to get all items

        res.json(items)//send retrieved items as a json response
    },

    getItemByID: async (req, res)=>{//controller method to get an item by its id
        const params=req.params;//extract parameters from the url

        const item=await ItemService.getById(params);//call the service to get the item by ID

        res.json(item)//send the single item as a json response
    },

    createItem: async (req, res)=>{//controller method to create a new item
        const schema=Joi.object({//define a validation schema for the request body
            id: Joi.number().required(),
            name: Joi.string().required(),
            category: Joi.string().required(),
            price: Joi.number().greater(0).required(),
            color: Joi.string().required(),
            material: Joi.string().required(),
            size: Joi.string().required(),
            stock: Joi.number().greater(0).required()
        })

        const{error, value}=schema.validate(req.body);//validate the request body against the schema

        if(error) return res.status(404).send({message: error.details[0].message})//so if we have an error and the item couldn't be created, it will show a message

        const newItem=await ItemService.create(req.body);//call the service to create a newItem
        return res.status(201).send(newItem);//return status 201 (created) and the new item
    },

    deleteItem: async (req, res)=>{//controller method to delete an item by ID
        const {id}=req.params;//extract the id from the url parameters

        const deleted=await ItemService.delete(id);//call the service to delete the item

        if(deleted.deletedCount==0)//check if the item was not found 
            return res.status(404).send({message: 'Item not found'})//if not found, send a 404 not found status

        return res.status(204).send();//if successful, send a 204 no content status
    },

    updatePriceItem: async (req, res)=>{//controller method to update the price of an item
        const params=req.params;//extract url parameters
        const updatedItem=await ItemService.updatePrice(params, req.body);//call the service to update the item's price

        
        return res.status(200).send(updatedItem)//send a 200 ok status and the updated item
    }
}

module.exports=ItemController;//export the ItemController object so it can be used in other files