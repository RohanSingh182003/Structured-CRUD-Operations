const Members = require("../models/memberSchema");

module.exports = {
  get: async (req, res) => {
    try {
      const response = await Members.find();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  post: async (req, res) => {
    try {
      const ins = new Members({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
      });
      const response = await ins.save();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  put: async (req, res) => {
    let response = await Members.find({_id:req.body.id})
    if(response.length>0){
    if (
      (req.body.id.length >= 3,
      req.body.first_name.length >= 3 &&
        req.body.last_name.length >= 3 &&
        JSON.stringify(req.body.age).length >= 2)
    ) {
      try {
        const response = await Members.findByIdAndUpdate(
          { _id: req.body.id },
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
          }
        );
        res.send(response);
      } catch (error) {
        console.log(error);
        res.status(404).send(error);
      }
    } else {
      res.status(500).json({ message: "length is too sort..." });
    }
  }
  else{
    res.send('No user found!')
  }
  },

  delete: async (req, res) => {
    let response = await Members.find({_id:req.body.id})
    if(response.length>0){
    if (req.body.id.length >= 3) {
      try {
        const response = await Members.findByIdAndDelete({ _id: req.body.id });
        res.send(response);
      } catch (error) {
        res.status(404).send(error);
      }
    } else {
      res.status(500).json({ message: "length is too sort..." });
    }
  }
    else{
      res.send('No user found!')
    }
  },
};
