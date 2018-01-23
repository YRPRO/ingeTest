describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});


/**
 * TEST
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 * Interval.prototype.includes
 */
describe("Interval - includes",function(){
    it("interval 2-5 in 0-10 should be true",function(){
        var i1 = new Interval(0,10);
        var i2 = new Interval(2,5);
        var res = i1.includes(i2);
        expect(res).toBe(true);
    });
     it("interval 2-5 in 10-15 should be false",function(){
        var i1 = new Interval(10,15);
        var i2 = new Interval(2,5);
        var res = i1.includes(i2);
        expect(res).toBe(false);
    });
});

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 * Interval.prototype.union = function (interval)
 */

describe("Interval - union",function(){
    it("interval 2-5 U 0-10 should be equal to [i1,i2]",function(){
        var i1 = new Interval(0,10);
        var i2 = new Interval(2,5);
        var res = i1.union(i2);
        expect(res).toEqual([i1,i2]);
    });
     
});
