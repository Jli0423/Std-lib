const lib = require('lib');
const imgur = require('imgur');
const request = require('request');
/**
 * @param {string} imgurID Who you're saying hello to
 * @returns {any}
 */

module.exports = (imgurID = '', context, callback) => {
  var testObject = {
    "Item 1": 38.34,
    "Item 2": 32.12,
    "Item 3": 2.43,
    "NANI": 0.00
  };

  var total = 0;

  for (item in testObject) {
    total += testObject[item];
  }

  // Invalid ID check
  if (!imgurID) {
    return callback(null, {
      "err_code": 404,
      "Message": "No ID Given"
    });
  };

  //IMGUR API 
  imgur.setClientId('8d514771c5c4418');
  imgur.getClientId();
  imgur.saveClientId().then(() => {
    console.log('Token Saved');
  }).catch((err) => {
    console.log(err.msg);
  });


  // API here
  imgur.loadClientId().then(imgur.setClientId);
  imgur.getInfo(imgurID).then((json) => {
    if (json.status == 200) {
      request({
        url: "https://bandaidapi.herokuapp.com/getData",
        method: "POST",
        json: true,
        body: {
          "id": imgurID
        }
      }, (err, res, body) => {
        return callback(null, res);
      });
      // return callback(null, {
      //   "pic_url": json.data.link,
      //   "items": testObject,
      //   "total": total,
      //   "type": "Temporary",
      //   "err_code": json.status
      // });
    }
  }).catch((err) => {
    return callback(null, err.status);
  });
};