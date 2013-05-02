module.exports = function (stream){
  return function(write, read, opts) {
    if ('function' !== typeof write)
      throw new TypeError('`write` parameter must be a function')
    if ('function' !== typeof read)
      throw new TypeError('`read` parameter must be a function')
    var duplex = new stream.Duplex(opts)
    duplex._read = read
    duplex._write = write
    return duplex
  }
}