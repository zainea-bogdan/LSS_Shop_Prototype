# LSS_Shop_Prototype Backend Diagram

### Alright, maybe you're asking why I made this diagram? :) Good question

Well, I made it for helping to understand what's behind the backend and what we need to implement. I used Excalidraw, an open-source online tool that functions as a virtual whiteboard for sketching hand-drawn-like diagrams and wireframes.

So, I made a diagram in two formats (Excalidraw and PNG) to ensure it can be accessed **:)**

## The diagram contains two parts:
<p align="center">
  <img src="GotchuBro.png" alt="Logo" width="600">
</p>

- **Part 1: the components that we need in the backend files:**

    - <ins>**Express (server):**</ins> starts a web application by using a specified port, to which users can make requests; express uses **AppRouter** to have access to the App's routes;
    - <ins>**AppRouter (router):**</ins> component which allows us to define routes and virtually connect them with the controller; in this way, **router** redirects requests from */api/shop* to be processed on **controller methods**, soo, long story short, router uses **ShopController** to decide which request goes to which method;
    - <ins>**ShopController:**</ins> validates requests and returns the responses from the service (based on status), in short, the controller calls **Service**; for HTTP status code documentation, refer to resources like https://http.cat/ , https://http.dog/ or https://httpgoats.com/ :)));
    - <ins>**ShopService:**</ins> uses the **DatabaseService**, retrieves data from it and makes sure the connection is up;
    - <ins>**DatabaseService:**</ins> makes calls to the **database**;
    - <ins>**Database:**</ins> contains data about the shops and orders, for this, we used MongoDB.




- **Part 2: methods used to access the service (these methods are part of the ShopController and OrderController):**
   - *getShops:* requests information about all the shops from the DB by using the method <ins>getAll</ins>;
   - *getShopByID:* accesses a shop by ID by using the method <ins>getByID</ins>;
   - *getOrders:* requests information about all the orders that belong to a shop;
   - *getOrderByID:* accesses an order by ID;
   - *createOrder:* creates a new order that we can insert into DB;
   - *deleteOrder:* deletes an order;
   - *updateDeliveryStatus:* updates an order.

   For these methods, we use the following Postman requests:
   - **GET:** getShops, getShopByID, getOrders, getOrderByID;
   - **POST:** createOrder;
   - **DELETE:** deleteOrder;
   - **PATCH:** updateDeliveryStatus (we use PATCH when we want to update only a part of an object, like delivery status from an order in our case);
   - **PUT:** use to update the entire order.

   If you're asking what is Postman, it is an API (Application Programming Interface) platform that provides a comprehensive set of tools for developers to design, build, test, document, and collaborate on APIs.

   Soon, I'll create a diagram for the frontend part. Stay tuned to see this part too :)) 
   
   ### Until then, that's all, folks :)))
   signed, [mariazorila4](https://github.com/mariazorila4)✌️😸
