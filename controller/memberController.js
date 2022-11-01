const Members = require("../models/memberSchema");


  const getMember= async (req, res) => {
    try {
      const response = await Members.find();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }

  const getSingleMember = async (req,res) => {
    let id = req.params.id;
    let member = await Members.find({_id : id})
    if (member.length>0) {
      res.send(member)
    } else {
      res.status(404).json({'message':'no user found :('})
    }
  }

  const addMember = async (req, res) => {
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
  }

  const  updateMember = async (req, res) => {
    let id = req.params.id;
    let response = await Members.find({_id:id})
    if(response.length>0){
    if (
      (req.body.first_name.length >= 3 &&
        req.body.last_name.length >= 3 &&
        JSON.stringify(req.body.age).length >= 2)
    ) {
      try {
        const response = await Members.findByIdAndUpdate(
          { _id: id },
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
          }
        );
        res.send(response);
      } catch (error) {
        res.status(404).send(error);
      }
    } else {
      res.status(500).json({ message: "length is too sort..." });
    }
  }
  else{
    res.status(404).json({ message: "no user found :(" })
  }
  }

  const deleteMember = async (req, res) => {
    let id = req.params.id
    let response = await Members.find({_id:id})
    if(response.length>0){
      try {
        const response = await Members.findByIdAndDelete({ _id: id });
        res.send(response);
      } catch (error) {
        res.status(404).send(error);
      }
  }
    else{
      res.status(404).json({'message':'No Member found!'})
    }
  }
  module.exports = {getMember,getSingleMember,addMember,updateMember,deleteMember};
