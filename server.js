// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.NEXT_PUBLIC_BASE_URL
const port = process.env.PORT || 3060
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

console.log("app: ", app);

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            if (pathname === '/a') {
                await app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
                await app.render(req, res, '/b', query)
            } else {
                await handle(req, res, parsedUrl)
            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on ${hostname}:${port}`)
    })
})
