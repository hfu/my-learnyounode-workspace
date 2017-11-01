var fs = require('fs')
var path = require('path')
module.exports = function(dir, ext, callback) {
  fs.readdir(dir, 'utf-8', function(err, data) {
    if(err) return callback(err)
    var r = []
    for(var i in data) {
      if(path.extname(data[i]) === ('.' + ext)) {
        r.push(data[i])
      }
    }
    callback(null, r)
  })
}
