// an array of consecutive integers can be determined by
// max - min === length - 1
// or if the start and end index of a subarray are i and j respectively
// max - min === j - i

function brute_force(array) {

    let start = 0;
    let length = 0;

    for(let i = 0; i < array.length; i++) {
        let min = array[i];
        let max = array[i];
        let map = {};
        map[array[i]] = i;
        
        for(let j = i + 1; j < array.length; j++) {
            min = Math.min(min, array[j]);
            max = Math.max(max, array[j]);

            if (max - min == j - i) {
                // i to j is a subarray of consecutive numbers (not necessarily in the right order though)
                if (j - i > length) {
                    start = i;
                    length = j - i;
                }
            }

            if (map.hasOwnProperty(array[j])) {
                // found a duplicate value
                break;
            }

            map[array[j]] = j;
        }
    }

    return array.slice(start, start + length + 1);
}

module.exports.brute_force = brute_force;