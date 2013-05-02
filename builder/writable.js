module.exports = function (stream){
  return function(write, opts) {
    if ('function' !== typeof write)
      throw new TypeError('`write` parameter must be a function')
    var s = new stream.Writable(opts)
    s._write = write
    return s
  }
}