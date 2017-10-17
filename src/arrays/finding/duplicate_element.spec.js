const duplicate_element = require('./duplicate_element');

describe('duplicate_element', () => {

    describe('arithmetic solution', () => {
        it('should find a duplicate element', () => {
            const array = [1, 2, 3, 4, 5, 5];
            const result = duplicate_element.arithmetic(array);
            expect(result).toEqual(5);
        });
    });

    describe('hashing solution', () => {
        it('should return the duplicate indices', () => {
            const array = [1, 5, 2, 3, 4, 5,];
            const result = duplicate_element.hashing(array);
            expect(result).toEqual([1, 5]);
        });
    });

});
