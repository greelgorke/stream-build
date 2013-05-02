var stream = require('stream')
module.exports = exports = stream

exports.readable  = require('./readable')(stream)
exports.writable  = require('./writable')(stream)
exports.duplex    = require('./duplex')(stream)
exports.transform = require('./ransform')(stream)
