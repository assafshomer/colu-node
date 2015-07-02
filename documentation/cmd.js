var bitcoin = require('bitcoinjs-lib');
require('./helpers.js')();

var hdnode = bitcoin.HDNode.fromSeedHex(randomHex(64), bitcoin.networks.testnet)

var user = hdnode.toBase58(false);

console.log("user:"+user)