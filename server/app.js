

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
      socket.on('newUser',  async ({ username, chatroom }, callback) => {

        const { error, user } = addUser({id: socket.id, username, chatroom})

        console.log(user)
        console.log(error)

        if(error) {
          
          return callback(error)
        }

        if(user !== undefined) {
          socket.emit('adminMsg', {user: `admin`, msg: `Hey ${user.username}, welcome to the ${user.chatroom} room`})

          socket.to(user.chatroom).emit('adminMsg', {user: `admin`, msg: `${user.username} joined the room`})

          socket.join(user.chatroom)
        } else {
          console.log(`page disconnected`)
          // return callback({ error: 'User disconnected please refresh page'})
        }

        
        callback()
      }) 

      socket.on('clientMsg', async(msg, callback) => {
        const user = getUser(socket.id)

        if(user !== undefined) {
          io.to(user.chatroom).emit('clientMessage', { user: user.username, msg })
          console.log(msg)
        } else {
          console.log(`page disconnected`)
          // return callback({ error: 'User disconnected please refresh page'})
        }

      })
      
      //when a user leaves a room or disconnects
      socket.on('disconnect', (callback) => {
        const user = getUser(socket.id)

        if(user !== undefined) {
          socket.to(user.chatroom).emit('adminMsg', { user: 'admin', msg: `${user.username} left the room` })

        } else {
          console.log(`page disconnected`)
          // return callback({ error: 'User disconnected please refresh page'})
        }
        deleteUser(socket.id)
      })
})

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
