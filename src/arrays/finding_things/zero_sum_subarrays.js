function zero_sum_subarrays(array) {

    const result = []

    // a hash table of sums and arrays of array indices
    const map = {};

    // insert into the map to handle case where subarray starts at index 0
    map[0] = [-1];

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum += array[i];

        // if we've seen this sum before then 
        // there must be at least one zero sum sub array
        // (the intervening numbers that go above or below that 
        // line and cross it exactly each time must sum to zero)
        if (map.hasOwnProperty(sum)) {
            const indices = map[sum];
            result.push([indices[indices.length - 1] + 1, i]);
        } else {
            map[sum] = [];
        }

        map[sum].push(i);
    }

    return result;
}

module.exports = zero_sum_subarrays;