module.exports = function (stream){
  return function(transform, opts, flush) {
    if ('function' !== typeof transform)
      throw new TypeError('`transform` parameter must be a function')
    if ('function' === typeof opts) {
      flush = opts
      opts = null
    }
    var s = new stream.Transform(opts)
    s._transform = transform
    s._flush = flush
    return s
  }
}