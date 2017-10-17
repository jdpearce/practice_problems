function binary_array_linear_time(array) {

    const pivot = 1;
    let j = 0;

    const swap = (array, x, y) => {
        let tmp = array[x];
        array[x] = array[y];
        array[y] = tmp;
    };

    for(let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            swap(array, i, j);
            j++;
        }
    }

    return array;
}

module.exports = binary_array_linear_time;