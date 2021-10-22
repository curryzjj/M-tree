/**
 * BloomFilter测试
 *
 */
let BoolmFilter = require('./BloomFilter')
let bloomFilter = new BoolmFilter(100000000, 0.01);
bloomFilter.add('a');
console.log(bloomFilter.contain('ggg'));