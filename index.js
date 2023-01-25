/*
 Refer test.js 
*/
const itemInfo = require("./test.js").itemInfo;
const data = require("./test.js").data;

/*
For this task, you are required to do some data transformation/summarization. 
 The question contains two variables 
 - data: Data is a list where a single record holds the sales data for a store. Daily sales for a given store is recorded inside the sales attribute of each record. The Sales attribute contains a list of purchased items where each item holds the customer id and item id, representing a customer and product respectively. 
 - itemInfo: itemInfo contains a list of items, with each item being uniquely identified by an id. ItemInfo is a list where each records holds the product id, its unit price and description.


You are supposed to output a list where each record corresponds to a bill for a single customer. Each record must have the following: 
- customer id,
- items: an attribute containing a list of purchased items, where each item in the list has the following: 
  - itemId
  - qty: Quantity of the itemId purchased
  - unitPrice: price of the item
  - description: description of the item
  - totalItemAmount: unitPrice * qty
- totalBillAmount: sum of all totalItemAmount

Following is the output format.
[{
  customerId: 3,
  items: [
    {
      itemId: 10024,
      qty: 2,
      unitPrice: 2,
      description: "APPLE",
      totalItemAmount: 4
    },
    {
      itemId: 10023,
      qty: 1, 
      unitPrice: 5, 
      description: "EGGS",
      totalItemAmount: 5
    }
  ], 
  totalBillAmount: 9
},...]





*/
