const lib = require('lib');
const mongoose = require('mongoose');

/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
module.exports = async (name = 'world', context, callback) => {

  var testSchema = mongoose.Schema({
    name: String
  });

  // DB Connection
  var mongoURI = 'mongodb://qhacks2018:qhacks2018@ds046357.mlab.com:46357/receipt-data';
  await mongoose.connect(mongoURI);
  console.log(mongoose)

  callback(null, `hello ${name}`);

};
