const {model} = require("mongoose");
const {OrdersSchema} = require("../schemas/HoldingsSchema");
const OrdersModel = new model("order",OrdersSchema);

module.exports={OrdersModel};