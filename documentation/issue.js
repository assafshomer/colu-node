// var Colu = require('colu-node')
var bitcoin = require('bitcoinjs-lib');
var Colu = require('../src/index.js');
var User = require('../src/user.js');
require('./helpers.js')();

var privateSeed = randomHex(64);

var hdnode = bitcoin.HDNode.fromSeedHex(randomHex(64), bitcoin.networks.testnet)

var userid = hdnode.toBase58(false);

var user = new User(userid);
console.log(user.getId())

var assetData = {
  amount: 1, //Number
  reissueable: true, //boolean
  injectPreviousOutput: false, //boolean
  divisibility: 0, //Number
  metadata : { // Optional
    assetId: "assetId",//String
    assetName: "assetName",//String
    issuer: "issuer",//String // Name of the asset issuer
    description: "description",//String
    userData : { // an object containing an array of key value type objects
      meta: [
          {key: "item id", value: 1, type: "Number"},
          {key: "key", value: "value", type: "type"},
      ]
    } 
  }
};


Colu.init('my_company', 'testnet', privateSeed, function (err, colu) {
  if (err) {
    return console.log('err: ' + err)
  }
  // This is your private seed, keep it safe!!!
  console.log('seed: ' + colu.getPrivateSeed())
  var nextAccount = 1 // colu.nextAccount
  console.log('nextAccount: ' + colu.nextAccount)
  colu.ccIssueFinanced(nextAccount, user,assetData, function (err, data) {
    if (err) {
      console.error('error: ' + err)
    } else {
      console.log('data: ' + JSON.stringify(data))
    }
  })
})