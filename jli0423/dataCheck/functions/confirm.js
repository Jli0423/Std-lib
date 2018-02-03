const lib = require('lib');
const mongoose = require('mongoose');

/**
  @param {object} data
* @returns {any}
*/

var receiptSchema = mongoose.Schema({
  type: String,
  total: Number,
  items:[]
});

var test = mongoose.model('test', receiptSchema);

module.exports = async (data = '', context) => {

  // if(!data) {
  //   return {
  //     "err_code": 404
  //   }
  // };

  var receipt = new test({
    type: "Superstore",
    total: 49.42,
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
