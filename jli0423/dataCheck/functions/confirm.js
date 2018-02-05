const lib = require('lib');
const mongoose = require('mongoose');

/**
  @param {object} data
* @returns {any}
*/

var receiptSchema = mongoose.Schema({
  items:[]
});

var data = mongoose.model('data', receiptSchema);

module.exports = async (items = '', context) => {

  if(!items) {
    return {
      "err_code": 404
    }
  };

  var receipt = new data({
    items: items
  });



  // DB Connection
  var mongoURI = 'mongodb://qhacks2018:qhacks2018@ds046357.mlab.com:46357/receipt-data';
  await mongoose.connect(mongoURI);
  console.log(receipt);
  receipt.save((err, res) => {
    if(err) {
      return console.log(err);
    }
    return res.body;
  });
  return "done!";

};
