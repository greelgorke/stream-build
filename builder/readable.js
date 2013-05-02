module.exports = function(stream){
  return function(read, opts) {
    if ('function' !== typeof read)
      throw new TypeError('`read` parameter must be a function')
    var s = new stream.Readable(opts)
    s._read = read
    return s
  }
}