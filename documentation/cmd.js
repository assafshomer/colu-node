var bitcoin = require('bitcoinjs-lib');

key = bitcoin.ECKey.makeRandom();
wif = key.toWIF();
address = key.pub.getAddress(bitcoin.networks.testnet).toString();

console.log('new TESTNET address: ['+address+']');
console.log('key: ['+wif+']');

var hdnode = bitcoin.HDNode.fromSeedHex('c507290be50bca9b887af39019f80e2f9f27e4020ee0a4fe51595ee4424d6151', bitcoin.networks.testnet)

console.log("hd:"+hdnode.toBase58())