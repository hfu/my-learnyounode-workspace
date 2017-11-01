var mymodule = require('./mymodule')
var dir = process.argv[2]
var ext = process.argv[3]
mymodule(dir, ext, function(err, data) {
  if(err) return
  for(var i in data) {
    console.log(data[i])
  }
})
