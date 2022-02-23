const server = require('./api/server')
const { PORT } = require('./api/secrets/index')

server.listen(PORT, () => {
  console.log(`\n** Running on port ${PORT} **\n`)
})
