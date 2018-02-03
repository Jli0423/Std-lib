const lib = require('lib');
const mongoose = require('mongoose');

/**
* A basic Hello World function
  @param {object} data
* @returns {any}
*/
module.exports = async (data = '', context) => {

  // if(!data) {
  //   return {
  //     "err_code": 404
  //   }
  // };

  var receiptSchema = mongoose.Schema({
    type: String,
    amount: Number,
    items:[]
  });

  var test = mongoose.model('test', receiptSchema);
  var receipt = new test({
    type: "Superstore",
    amount: 49.42,
    items: [{
      "Item 1": 38.34,
      "Item 2": 32.12,
      "Item 3": 2.43,
      "NANI": 0.00
    }]
  });



  // DB Connection
  var mongoURI = 'mongodb://qhacks2018:qhacks2018@ds046357.mlab.com:46357/receipt-data';
  await mongoose.connect(mongoURI);
  console.log(receipt);
  receipt.save((err, res) => {
    if(err) {
      return console.log(err);
    }
  });
  return "done!";

};
