var random = require('./');
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite('turf-union');
suite
  .add('turf-random',function () {
    random('point');
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();
