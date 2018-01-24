Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return interval.start >= this.start && interval.start <= this.end && interval.end <= this.end && interval.end >= this.start;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {	
	if(this.overlaps(interval))
		return new Interval(this.start,interval.end);
	if(interval.overlaps(this))
		return new Interval(interval.start,this.end);

	return [this,interval];
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {

};



