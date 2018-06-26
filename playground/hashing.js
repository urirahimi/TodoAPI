const {SHA256} = require('crypto-js');

var message = "I am user number 3";
var hash = SHA256(message).toString();
const jwt = require('jsonwebtoken');

var data = {
    id: 4,
}

var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log(decoded);
// console.log(message);
// console.log(hash);

// var data = {
//     id: 4,
// }

// // this is the JSON web token encryption.
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed')
// } else {
//     console.log('do not change ');
// }