

/**
 * Checks if the input is 'devjun' or not
 * @param string
 * @returns {boolean}
 */

function isdevjun(string) {
    // console.log('isDevjun');
    if (typeof string !== 'string') {
        throw new Error('Input must be a string');
    }
    return string === 'devjun';
}

module.exports = isdevjun;