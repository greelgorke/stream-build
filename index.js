var stream = require('stream')
module.exports = exports = stream

exports.readable  = require('./builder/readable')(stream)
exports.writable  = require('./builder/writable')(stream)
exports.duplex    = require('./builder/duplex')(stream)
exports.transform = require('./builder/transform')(stream)
