const Members = require("../models/dashboardSchema");

const getDashboard = async (req, res) => {
  try {
    const response = await Members.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const getSingleDashboard = async (req, res) => {
  let id = req.params.id;
  let member = await Members.find({ _id: id });
  if (member.length > 0) {
    res.send(member);
  } else {
    res.status(404).json({ message: "no user found :(" });
  }
};

const addDashboard = async (req, res) => {
  try {
    const ins = new Members({
      prod_name: req.body.prod_name,
      ip_address: req.body.ip_address,
      mac_address: req.body.mac_address,
      function: req.body.function,
      version: req.body.version,
      last_updated: req.body.last_updated
    });
    const response = await ins.save();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const updateDashboard = async (req, res) => {
  let id = req.params.id;
  let response = await Members.find({ _id: id });
  if (response.length > 0) {
    if (
      req.body.prod_name.length >= 3 &&
      req.body.ip_address.length >= 3 &&
      req.body.mac_address.length >= 3 &&
      req.body.function.length >= 3
    ) {
      try {
        const response = await Members.findByIdAndUpdate(
          { _id: id },
          {
            prod_name: req.body.prod_name,
            ip_address: req.body.ip_address,
            mac_address: req.body.mac_address,
            function: req.body.function,
            version: req.body.version,
            last_updated: req.body.last_updated
          }
        );
        res.send(response);
      } catch (error) {
        res.status(404).send(error);
      }
    } else {
      res.status(500).json({ message: "length is too sort..." });
    }
  } else {
    res.status(404).json({ message: "no user found :(" });
  }
};

const deleteDashboard = async (req, res) => {
  let id = req.params.id;
  let response = await Members.find({ _id: id });
  if (response.length > 0) {
    try {
      const response = await Members.findByIdAndDelete({ _id: id });
      res.send(response);
    } catch (error) {
      res.status(404).send(error);
    }
  } else {
    res.status(404).json({ message: "No Member found!" });
  }
};
module.exports = {
  getDashboard,
  getSingleDashboard,
  addDashboard,
  updateDashboard,
  deleteDashboard,
};
