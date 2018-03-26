var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
 
// add tests 
suite.add('正则匹配', function() {
  /o/.test('Hello World!');
})
.add('字符串查找', function() {
  'Hello World!'.indexOf('o') > -1;
})
// add listeners 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('更快的是 ' + this.filter('fastest').map('name'));
})
// run async 
.run({ 'async': true });