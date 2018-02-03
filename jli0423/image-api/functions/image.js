const lib = require('lib');

/**
* @param {string} imgur Who you're saying hello to
* @returns {object}
*/

/*Example call: https://jli0423.lib.id/image-api@dev/image/?imgur=%22asdf%22*/
module.exports = (imgur, context, callback) => {

  /*call Azuare API here
    get json back ->return json object*/

  var test = {
    "Test": 334,
    "Test2": 234
  }
  return callback(null, test);

};
