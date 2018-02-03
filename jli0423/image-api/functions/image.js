const lib = require('lib');
const imgur = require('imgur');

/**
 * @param {string} imgurID Who you're saying hello to
 * @returns {object}
 */

module.exports = (imgurID = '', context, callback) => {

  if(!imgurID){
    return callback(null, {
      "Status": 404,
      "Message": "No ID Given"
    })
  };

  imgur.setClientId('8d514771c5c4418');
  imgur.getClientId();
  imgur.saveClientId().then(() => {
    console.log('saved');
  }).catch((err) => {
    console.log(err.msg);
  });


  imgur.loadClientId().then(imgur.setClientId);
  imgur.getInfo(imgurID).then((json) => {
    if (json.status == 200) {
      return callback(null, {
        "Status": json.status,
        "Link": json.data.link
      });
    }
  }).catch((err) => {
    console.error(err);
    return callback(null, {
      "Status": err.status
    });
  });
};