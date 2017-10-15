const find_pair_with_given_sum = require('./pair_with_given_sum');

describe('find_pair_with_given_sum', () => {

    it('should find a single pair in an array with only one', () => {
        const array = [0, 1, 7, 5, 6, 3];
        const sum = 4;
        const result = find_pair_with_given_sum(array, sum);
        expect(result).toEqual([[1, 5]]);
    });

});
