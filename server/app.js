

const express = require('express');
const cors = require('cors')
const { getUser, getUsersInRoom, addUser, deleteUser  } = require('./users')

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
   
    //when a user joins a room
    socket.on('newUser', ({ username, chatroom }, callback) => {
      const { error, user } = addUser({id: socket.id, username, chatroom})

      if(error) {
        return callback(error)
      }

      socket.emit('adminMsg', {user: `admin`, msg: `Hey ${user.username}, welcome to the ${user.chatroom} room`})

      socket.to(user.chatroom).emit('adminMsg', {user: `admin`, msg: `${user.username} joined the room`})

      socket.join(user.chatroom)
      callback()
    }) 

    socket.on('clientMsg', (msg) => {
      const user = getUser(socket.id)

      io.to(user.chatroom).emit('clientMessage', { user: user.username, msg })
      console.log(msg)
    })
    
    //when a user leaves a room or disconnects
    socket.on('disconnect', () => {
        deleteUser(socket.id)
    })
})

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
