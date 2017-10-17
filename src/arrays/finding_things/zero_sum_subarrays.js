function zero_sum_subarrays(array) {

    const results = []

    // a hash table of sums and indices
    const map = {};

    // insert into the map to handle the case where subarray starts at index 0
    map[0] = -1;

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum += array[i];

        // if we've seen this sum before then 
        // there must be at least one zero sum sub array
        // (the intervening numbers that go above or below that 
        // line and cross it exactly each time must sum to zero)
        if (map.hasOwnProperty(sum)) {
            results.push([map[sum] + 1, i]);
        }

        // note that we only have to store the last time we saw this sum.
        map[sum] = i;
    }

    return results;
}

module.exports = zero_sum_subarrays;