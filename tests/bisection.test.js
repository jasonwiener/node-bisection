/**
 * Test results from Python 2.5.2 bisect
 * 
 * Note: The arrow next to each call has been added to show the index 
 * position that the method produced.
 * 
 * 	bisect_right
 * 	>>> bisect.bisect_right(small, 0) -> 1
 * 	>>> bisect.bisect_right(small, 7) -> 7
 * 	>>> bisect.bisect_right(small, 15) -> 9
 * 	>>> bisect.bisect_right(small, 4, 5) -> 5
 * 	>>> bisect.bisect_right(small, 12, 0, 5) -> 5
 * 
 * 	>>> bisect.bisect_right(large, 0) -> 0
 * 	>>> bisect.bisect_right(large, 242) -> 4
 * 	>>> bisect.bisect_right(large, 350) -> 8
 * 	>>> bisect.bisect_right(large, 232424) -> 14
 * 
 * 	bisect_left
 * 	>>> bisect.bisect_left(small, 0) -> 0
 * 	>>> bisect.bisect_left(small, 7) -> 6
 * 	>>> bisect.bisect_left(small, 15) -> 9
 * 	>>> bisect.bisect_left(small, 4, 5) -> 5
 * 	>>> bisect.bisect_left(small, 12, 0, 5) -> 5
 * 	
 * 	>>> bisect.bisect_left(large, 0) -> 0
 * 	>>> bisect.bisect_left(large, 242) -> 4
 * 	>>> bisect.bisect_left(large, 350) -> 8
 * 	>>> bisect.bisect_left(large, 232424) -> 14
 * 	
 * 	insort_right
 * 	>>> bisect.insort_right(small,0) -> 1
 * 	[0, 0, 1, 2, 3, 5, 6, 7, 8, 9]
 *      ^
 * 	>>> bisect.insort_right(small,7) -> 7
 * 	[0, 1, 2, 3, 5, 6, 7, 7, 8, 9]
 *                        ^
 * 	>>> bisect.insort_right(small,15) -> 9
 * 	[0, 1, 2, 3, 5, 6, 7, 8, 9, 15]
 *                              ^^
 * 	>>> bisect.insort_right(small, 4, 5) -> 5
 * 	[0, 1, 2, 3, 5, 4, 6, 7, 8, 9]
 *                  ^
 * 	>>> bisect.insort_right(small, 12, 0, 5) -> 5
 * 	[0, 1, 2, 3, 5, 12, 6, 7, 8, 9]
 * 	                ^^
 * 	>>> bisect.insort_right(large, 0) -> 0
 * 	[0, 122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]
 *   ^
 * 	>>> bisect.insort_right(large, 242) -> 4
 * 	[122, 124, 134, 176, 242, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]
 *                       ^^^
 * 	>>> bisect.insort_right(large, 350) -> 8
 * 	[122, 124, 134, 176, 320, 341, 345, 346, 350, 500, 587, 666, 768, 1230, 23231]
 *                                           ^^^
 * 	>>> bisect.insort_right(large, 232424) -> 14
 * 	[122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231, 232424]
 * 	                                                                          ^^^^^^
 * 	>>> bisect.insort_left(small, 0) -> 0
 * 	[0, 0, 1, 2, 3, 5, 6, 7, 8, 9]
 *   ^
 * 	>>> bisect.insort_left(small, 7) ->  6
 * 	[0, 1, 2, 3, 5, 6, 7, 7, 8, 9]
 *                     ^
 * 	>>> bisect.insort_left(small, 15) -> 9
 * 	[0, 1, 2, 3, 5, 6, 7, 8, 9, 15]
 *                              ^^
 * 	>>> bisect.insort_left(small, 4, 5) -> 5
 * 	[0, 1, 2, 3, 5, 4, 6, 7, 8, 9]
 *                  ^
 * 	>>> bisect.insort_left(small, 12, 0, 5) -> 5
 * 	[0, 1, 2, 3, 5, 12, 6, 7, 8, 9]
 *                  ^^
 * 	>>> bisect.insort_left(large, 0) -> 0
 * 	[0, 122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]
 *   ^
 * 	>>> bisect.insort_left(large, 242) -> 4
 * 	[122, 124, 134, 176, 242, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]
 *                       ^^^
 * 	>>> bisect.insort_left(large, 350) -> 8
 * 	[122, 124, 134, 176, 320, 341, 345, 346, 350, 500, 587, 666, 768, 1230, 23231]
 *                                           ^^^
 * 	>>> bisect.insort_left(large, 232424) -> 14
 * 	[122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231, 232424]
 * 	                                                                          ^^^^^^
 */

var should = require('should'), bisection = require('../lib/bisection');

var small = [0,1,2,3,5,6,7,8,9],
	large = [122,124,134,176,320,341,345,346,500,587,666,768,1230,23231];

module.exports = {

  'library version': function(){
     bisection.version.should.match(/^\d+\.\d+\.\d+$/);
  },
  
  'bisect and bisect_right': function(){
     bisection.bisect.should.equal(bisection.bisect_right);
  },
  
  'bisect right': function(){
    bisection.bisect(small, 0).should.equal(1);
    bisection.bisect(small, 7).should.equal(7);
    bisection.bisect(small, 15).should.equal(9);
    bisection.bisect(small, 4, 5).should.equal(5);
    bisection.bisect(small, 12, 0, 5).should.equal(5);
    
    bisection.bisect(large, 0).should.equal(0);
    bisection.bisect(large, 242).should.equal(4);
    bisection.bisect(large, 350).should.equal(8);
    bisection.bisect(large, 232424).should.equal(14);
  },

  'bisect left': function(){
    bisection.bisect_left(small, 0).should.equal(0);
    bisection.bisect_left(small, 7).should.equal(6);
    bisection.bisect_left(small, 15).should.equal(9);
    bisection.bisect_left(small, 4, 5).should.equal(5);
    bisection.bisect_left(small, 12, 0, 5).should.equal(5);
    
    bisection.bisect_left(large, 0).should.equal(0);
    bisection.bisect_left(large, 242).should.equal(4);
    bisection.bisect_left(large, 350).should.equal(8);
    bisection.bisect_left(large, 232424).should.equal(14);
  },
  
  'insort right': function(){
	
	_small = small.slice(0);
	bisection.insort(_small, 0);
    _small.should.eql([0, 0, 1, 2, 3, 5, 6, 7, 8, 9]);
	_small = small.slice(0);
	bisection.insort(_small, 7);
	_small.should.eql([0, 1, 2, 3, 5, 6, 7, 7, 8, 9]);
	_small = small.slice(0);
	bisection.insort(_small, 15);
	_small.should.eql([0, 1, 2, 3, 5, 6, 7, 8, 9, 15]);
	_small = small.slice(0);
    bisection.insort(_small, 4, 5);
    _small.should.eql([0, 1, 2, 3, 5, 4, 6, 7, 8, 9]);
	_small = small.slice(0);
    bisection.insort(_small, 12, 0, 5);
    _small.should.eql([0, 1, 2, 3, 5, 12, 6, 7, 8, 9]);

	_large = large.slice(0);
    bisection.insort(_large, 0);
    _large.should.eql([0, 122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort(_large, 242);
	_large.should.eql([122, 124, 134, 176, 242, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort(_large, 350);
	_large.should.eql([122, 124, 134, 176, 320, 341, 345, 346, 350, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort(_large, 232424);
	_large.should.eql([122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231, 232424]);
  },
  
  'insort left': function(){
	_small = small.slice(0);
	bisection.insort_left(_small, 0);
    _small.should.eql([0, 0, 1, 2, 3, 5, 6, 7, 8, 9]);
	_small = small.slice(0);
	bisection.insort_left(_small, 7);
	_small.should.eql([0, 1, 2, 3, 5, 6, 7, 7, 8, 9]);
	_small = small.slice(0);
	bisection.insort_left(_small, 15);
	_small.should.eql([0, 1, 2, 3, 5, 6, 7, 8, 9, 15]);
	_small = small.slice(0);
    bisection.insort_left(_small, 4, 5);
    _small.should.eql([0, 1, 2, 3, 5, 4, 6, 7, 8, 9]);
	_small = small.slice(0);
    bisection.insort_left(_small, 12, 0, 5);
    _small.should.eql([0, 1, 2, 3, 5, 12, 6, 7, 8, 9]);

	_large = large.slice(0);
    bisection.insort_left(_large, 0);
    _large.should.eql([0, 122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort_left(_large, 242);
	_large.should.eql([122, 124, 134, 176, 242, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort_left(_large, 350);
	_large.should.eql([122, 124, 134, 176, 320, 341, 345, 346, 350, 500, 587, 666, 768, 1230, 23231]);
	_large = large.slice(0);
	bisection.insort_left(_large, 232424);
	_large.should.eql([122, 124, 134, 176, 320, 341, 345, 346, 500, 587, 666, 768, 1230, 23231, 232424]);
  }
}