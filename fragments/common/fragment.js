const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname
    const jsHeader = { 'Content-Type': 'application/javascript' }
    switch (pathname) {
        case '/public/bundle.js':
            res.writeHead(200, jsHeader)
            return fs.createReadStream('./public/bundle.js').pipe(res)
        default:
            res.writeHead(404);
            return res.end('')
    }
})

server.listen(3009, () => {
    console.log('SPA Fragment Server started at 3008')
})
