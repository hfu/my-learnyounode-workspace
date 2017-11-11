const http = require('http')
const url = require('url')
const router = {
  '/api/parsetime': q => {
    const d = new Date(q.iso)
    return JSON.stringify({
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }, undefined, 2)
  },
  '/api/unixtime': q => {
    const d = new Date(q.iso)
    return JSON.stringify({
      unixtime: d.getTime()
    }, undefined, 2)
  }
}
http.createServer((req, res) => {
  req.on('error', () => { console.error(err.stack) })
  const u = url.parse(req.url, true)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(router[u.pathname](u.query))
}).listen(Number(process.argv[2]))
