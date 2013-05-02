# Stream-build

this package offers you convenience factory methods for the 4 base streams for simpler creation of custom streams.

## Usage

Core stream module is re-exported. So you can easy replace `require('stream')` with `require('stream-build')` and go on. Now you have for factory methods, which can be used to create custom streams:

```javascript
// Before
function MyReadable(opts){
  //this and that
}

util.inherit(MyReadable,Readable)

MyReadable._read() = function(size){
  //custom read code
}

var myReadable = new MyReadable()
```


```javascript
// after

var myReadable = streamBuild.readable( function(size){
  //custom read code
}, {/* opts here*/})

```