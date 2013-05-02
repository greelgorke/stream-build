# Stream-build

this package offers you convenience factory methods for the 4 base streams for simpler creation of custom streams.

[![Build Status](https://travis-ci.org/greelgorke/stream-build.png?branch=master)](https://travis-ci.org/greelgorke/stream-build)

## Usage

Core stream module is re-exported. So you can easy replace `require('stream')` with `require('stream-build')` and go on. Now you have for factory methods, which can be used to create custom streams:

```javascript
// Before
function MyReadable(opts){
  //this and that
}

util.inherit(MyReadable,Readable)

MyReadable.prototype._read() = function(size){
  //custom read code
}

var myReadable = new MyReadable()
```


```javascript
// after

var myReadable = streamBuild.readable( function(size){
  //custom read code
}, {/* optional options here*/})
```

## Install

`npm install stream-build`

## About Performance

the builder provided here do not use constructors or inheritance. This package aims for readability, so if you worry about performance:

1. Measure
2. eliminate bottlenecks

Creating a constructor function and using it as in the before-example may give you some bit better performance, since v8 uses such structures for optimization considerations. It's your choice then.

## License

MIT (see license file)

