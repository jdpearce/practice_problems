const largest_subarray = require('./largest_subarray');

describe('largest_subarray', () => {

    describe('brute force method', () => {
        it('should return the largest subarray', () => {
            const array = [2, 1, 0, 1, 3, 4, 2, 2, 3, 1];
            const result = largest_subarray.brute_force(array);
            expect(result).toEqual([0, 1, 3, 4, 2]);
        });
    });

});
