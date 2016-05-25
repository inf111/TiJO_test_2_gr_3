describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('To jest napis')).toBe('To Jest Napis');

        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('ThisIs Easy')).toBe('ThisIs Easy');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            expect(exercise.upperCase('This is,m Easy')).toBe('This Is,m Easy');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([5, 6, 7])).toBe(6);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([90, 80, 70, 60])).toBe(80);
        });
        it('string should be committed', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([90, 'str', 70, 50])).toBe(70);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['dog', 'pies'])).toEqual(false);
        });
    });
});
