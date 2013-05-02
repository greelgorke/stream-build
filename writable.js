module.exports = function (stream){
  return function(write, opts) {
    if ('function' !== typeof write)
      throw new TypeError('`write` parameter must be a function')
    var writable = new stream.Writable(opts)
    writable._write = write
    return writable
  }
}