

const express = require('express');
const cors = require('cors')

const app = express()
const http = require('http').createServer(app);

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 5000

app.use(cors())
app.disable('x-powered-by')

io.on('connection', async(socket) => {
    console.log('User connected')
    socket.on('disconnect', () => {
        console.log(`user left room`)
    })

    socket.on('new user', ({ username, chatroom }, callback) => {
      console.log(`${username} joined ${chatroom} room`)

      callback()
    })
})

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
