module.exports = function (stream){
  return function(read, write, opts) {
    if ('function' !== typeof write)
      throw new TypeError('`write` parameter must be a function')
    if ('function' !== typeof read)
      throw new TypeError('`read` parameter must be a function')
    var s = new stream.Duplex(opts)
    s._read = read
    s._write = write
    return s
  }
}