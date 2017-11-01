var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function(err, entries) {
  if(err) return
  for(var i in entries) {
    if(path.extname(entries[i]) === ext) {
      console.log(entries[i])
    }
  }
})
