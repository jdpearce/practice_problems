const binary_array_linear_time = require('./binary_array_linear_time');

describe('binary_array_linear_time', () => {

    it('should return an empty array when array is empty', () => {
        const array = [];
        const result = binary_array_linear_time(array);
        expect(result).toEqual([]);
    });

    it('should be able to sort the array', () => {
        const array = [1, 0, 1, 0, 1, 0, 0, 1];
        const result = binary_array_linear_time(array);
        expect(result).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
    });

});
