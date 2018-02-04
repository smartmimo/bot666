http = require 'http'
handle = (req, res) -> res.end "hit"

server = http.createServer handle

server.listen process.env.PORT || 5000