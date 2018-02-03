const lib = require('lib');
const imgur = require('imgur');

/**
 * @param {string} imgurID Who you're saying hello to
 * @returns {any}
 */

module.exports = (imgurID = 'mbgq7nd', context, callback) => {

  imgur.setClientId('8d514771c5c4418');
  imgur.getClientId();
  imgur.saveClientId().then(() => {
    console.log('saved');
  }).catch((err) => {
    console.log(err.msg);
  });


  imgur.loadClientId().then(imgur.setClientId);
  imgur.getInfo(imgurID).then((json) => {
    console.log(json.status);
    if (json.status == 200) {
      return callback(null, json.data.link);
    }
  }).catch((err) => {
    console.error(err);
    return callback(null, err.status);
  });
};