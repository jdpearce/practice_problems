const zero_sum_subarrays = require('./zero_sum_subarrays');

describe('zero_sum_subarrays', () => {

    it('should return an empty array when no subarrays exist', () => {
        const array = [4, 1, 7, 4, 6, 3];
        const result = zero_sum_subarrays(array);
        expect(result).toEqual([]);
    });

    it('should find a single pair in an array with only one', () => {
        const array = [3, 1, 7, -7, 6, 3];
        const result = zero_sum_subarrays(array);
        expect(result).toEqual([[2, 3]]);
    });

    it('should find multiple subarrays in an array with more than one', () => {
        const array = [3, 1, -4, 4, 3, -7];
        const result = zero_sum_subarrays(array);
        expect(result).toEqual([[0, 2], [2, 3], [3, 5]]);
    });

});
