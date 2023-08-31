const Item = require("../models/itemModel")

//@desc Get all items.
//@route GET /items
const getItems= async(req,res) =>{
    try {
        const items = await Item.find();
        res.json(items);
      } 
      catch (error) {
        res.status(500).json({ error: 'Failed to retrieve items.' });
      }
};

 //@desc Create new item.
//@route POST /items

 const createItem =  async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
        // res.json(error);
       res.status(400).json({ error: 'Failed to add item.' });
    }
  };

  module.exports={ getItems,createItem };
  
