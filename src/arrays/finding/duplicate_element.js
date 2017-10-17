// this tells us what the element is, not where it is
function arithmetic(array) {

    const n = array.length;
    const actual_sum = array.reduce((sum, value) => sum + value);
    const expected_sum = n * (n - 1)/2; // formula for the sum of a simple arithmetic sequence from 1 to (n - 1)

    return actual_sum - expected_sum;
}

// this tells us where the repeats are, but not what the value is (we can look that up easily)
function hashing(array) {

    let result = [];
    const map = {};

    for(let i = 0; i < array.length; i++) {
        if (map.hasOwnProperty(array[i])) {
            // found the duplicate
            result = [map[array[i]], array[i]];
            break; // we're told there's only one. We could modify this easily to look for multiple repeats.
        }
        map[array[i]] = i;
    }

    return result;
}

module.exports.arithmetic = arithmetic;
module.exports.hashing = hashing;