const app = require('./app')
const port = process.env.PORT || 3005
const server = app.listen(port)

server.on('listening', function(){
  console.log(`Website running at port : ${port}`)
})
