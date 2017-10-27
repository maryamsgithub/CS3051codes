/* let connect = require('connect')
let app = connect()
let helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
}
app.use(helloWorld)
app.listen(process.env.PORT, process.env.IP) */


/* let http = require('http') creating web server is for control
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World')
    console.log('response sent')
}).listen(process.env.PORT, process.env.IP) */

/* Handling different requests
helloWorld function is the callback function


A connect middleware is a function
function(request, response, next)

let connect = require('connect')
let app = connect()
let logger = function(req, res, next) {
    console.log(req.method, req.url)
    next()
}
let helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
}
let goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Goodbye World')
}
app.use(logger)
app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)
app.listen(process.env.PORT, process.env.IP) */

//servers runs forever and associates requests to ports and allows middlewares to work
