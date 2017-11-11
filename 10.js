let net = require('net')
let strftime = require('strftime')

let server = net.createServer(s => {
  s.end(strftime('%F %H:%M', new Date()) + '\n')
})

server.listen(Number(process.argv[2]))
