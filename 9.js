var http = require('http')
var bl = require('bl')
var results = [false, false, false]
    
process.argv.slice(2, 5).forEach((v, i, a) => {
  http.get(v, response => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err)
      }
      results[i] = data.toString()
      if(results.filter(v => {return v}).length == 3) {
        results.forEach(v => {console.log(v)})
      }
    }))
  })
})

