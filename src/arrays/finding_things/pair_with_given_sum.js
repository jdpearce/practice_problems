function find_pair_with_given_sum(array, sum) {

    const result = []

    // a hash table of array indices
    // if we've seen the number before, its index is in the map.
    const map = {};

    for (let i = 0; i < array.length; i++) {

        const other = sum - array[i];
        if (map[other]) {
            // found a pair at map[other], i
            result.push([map[other], i]);
        }

        map[array[i]] = i;
    }

    return result;
}

module.exports = find_pair_with_given_sum;