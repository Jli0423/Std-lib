const lib = require('lib');
const imgur = require('imgur');
const request = require('request');
/**
 * @param {string} imgurID Who you're saying hello to
 * @returns {any}
 */

module.exports = (imgurID = '', context, callback) => {

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
        if (err) {
          return err;
        }
        var temp = [];
        var items = {};
        var total = 0;
        temp = res.body.items;
        for(var i = 0; i < temp.length; i++){
          items[temp[i].item] = temp[i].price;
        }
        totat = temp.total;
        return callback(null, {
          "pic_url": json.data.link,
          "items": items,
          "total": total,
          "type": "Temporary",
          "err_code": json.status
        });
      });
    }
  }).catch((err) => {
    return callback(null, err.status);
  });
};