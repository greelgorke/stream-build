var assert = require('assert')

var index =  require('../')

describe('index', function(){
  it('should re-export stream api', function() {
    assert.strictEqual( index, require('stream') )
  })
  it('should export factory methods', function() {
    assert( typeof index.readable === 'function' )
    assert( typeof index.writable === 'function' )
    assert( typeof index.duplex === 'function' )
    assert( typeof index.transform === 'function' )
  })
})

describe('readable', function() {
  it('should create a readable stream with custom read', function() {
    var read = function(){}
      , opts = {objectMode:true}
      , rs = index.readable(read, opts)

    assert( rs instanceof index.Readable )
    assert.strictEqual( rs._read, read )
    assert( rs._readableState.objectMode, opts.objectMode )
  })
})

describe('writable', function() {
  it('should create a writable stream with custom write', function() {
    var write = function(){}
      , opts = {decodeStrings:true}
      , ws = index.writable(write, opts)

    assert( ws instanceof index.Writable )
    assert.strictEqual( ws._write, write )
    assert( ws._writableState.decodeStrings, opts.decodeStrings )
  })
})

describe('duplex', function() {
  it('should create a duplex stream with custom read and write', function() {
    var read = function(){}
      , write = function(){}
      , opts = {objectMode:true}
      , ds = index.duplex(read, write, opts)
    assert( ds instanceof index.Duplex )
    assert.strictEqual( ds._read, read )
    assert.strictEqual( ds._write, write )
    assert( ds._readableState.objectMode, opts.objectMode )
  })
})

describe('transform', function() {
  it('should create a transform stream with custom transform and flush', function() {
    var transform = function(){}
      , flush = function(){}
      , opts = {objectMode:true}
      , ts = index.transform(transform, opts, flush)
    assert( ts instanceof index.Transform )
    assert.strictEqual( ts._transform, transform )
    assert.strictEqual( ts._flush, flush )
    assert( ts._readableState.objectMode, opts.objectMode )
  })

  it('should create a transform stream with custom transform and no flush', function() {
    var transform = function(){}
      , opts = {objectMode:true}
      , ts = index.transform(transform, opts)
    assert( ts instanceof index.Transform )
    assert.strictEqual( ts._transform, transform )
    assert.equal( ts._flush, null )
    assert( ts._readableState.objectMode, opts.objectMode )
  })

  it('should create a transform stream with custom transform and flush without opts', function() {
    var transform = function(){}
      , flush = function(){}
      , ts = index.transform(transform, flush)
    assert( ts instanceof index.Transform )
    assert.strictEqual( ts._transform, transform )
    assert.strictEqual( ts._flush, flush )
  })
})