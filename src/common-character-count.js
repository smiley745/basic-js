const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.log(s1, s2)
    let a1 = s1.split(''),
    a2 = s2.split(''),
    count = 0

    a1.forEach((l1) =>{
      a2.find((l2,j)=>{
        if (l2 === l1) {
          count += 1
          a2[j] = 0
          return true
        }
      })
     
    })
    return count
}

module.exports = {
  getCommonCharacterCount
};
