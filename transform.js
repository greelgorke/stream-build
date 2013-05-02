module.exports = function (stream){
  return function(transform, opts, flush) {
    if ('function' !== typeof transform)
      throw new TypeError('`transform` parameter must be a function')
    if ('function' === typeof _opts) {
      flush = opts
      opts = null
    }
    var transform = new stream.Transform(opts)
    transform._transform = transform
    transform._flush = flush
    return transform
  }
}