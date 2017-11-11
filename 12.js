const http = require('http')
const map = require('through2-map')

http.createServer((req, res) => {
  req.on('error', () => {
    console.error(err.stack)
  })
  res.writeHead(200, {'content-type': 'text/plain'})
  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).listen(Number(process.argv[2]))
