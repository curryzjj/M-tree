const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')
const { SHA512 } = require('crypto-js')
let randomString = require('./randomString')
    /**
     * @param {testLength} -The length of the inputString
     * @param {inputString} -Data input into the Merkletree
     * @param {findString} -Data set for testing search performance
     * @param {n}-Percentage of existing data,example:if n=2，50% of the data is in the Merkletree
     */
var string = new randomString(true, 3, 32)
var inputString = [];
var findString = []; //inputString+50%randomString
var testLength = 5000; //testdata length
var n = 3;
for (var i = 0; i < testLength; i++) {
    inputString.push(string.createString())
}
console.log("inputString is ready")
console.log("inputString is " + testLength + " items")
for (var i = 0; i < (n - 1) * testLength; i++) {
    findString.push(string.createString())
    if (i < inputString.length) {
        findString.push(inputString[i])
    }
}
console.log("findString is ready")
console.log("findString is 33% contained in the tree")

//withoutBloomFilter
console.time('create running time withoutBloomFilter')
const tree = new MerkleTree(inputString, SHA256, false, false)
console.timeEnd('create running time withoutBloomFilter')

console.time('proof running time withoutBloomFilter')
for (var i = 0; i < n * testLength; i++) {
    const proof = tree.getProof(findString[i])
}
console.timeEnd('proof running time withoutBloomFilter')