const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = Math.LN2 / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(date) {
    if (!date || typeof(date) !== 'string' || +date > 15) {
      return false
    }

    const dateNum = +date

    let res = Math.ceil(Math.log(MODERN_ACTIVITY / dateNum) / k)


    if (res && res > 0 && res !== Infinity) {
      return res
    } else {
      return false
    }
}

module.exports = {
  dateSample
};
