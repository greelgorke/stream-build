module.exports = function(stream){
  return function(read, opts) {
    if ('function' !== typeof read)
      throw new TypeError('`read` parameter must be a function')
    var readable = new stream.Readable(opts)
    readable._read = read
    return readable
  }
}