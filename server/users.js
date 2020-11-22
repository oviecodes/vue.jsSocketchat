

let users  = []

const getUser = (id) => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = (chatroom) => {
    const usersInroom = users.filter((user) => user.chatroom === chatroom)
    return usersInroom
}

const addUser = ({id, username, chatroom}) => {
    username = username.trim().toLowerCase()

    const existingUser = users.find((user) => user.username === username && user.chatroom ===chatroom)

    if(existingUser){
        return { error: 'Invalid username' }
    }

    const user = { id, username, chatroom}

    users.push(user)

    return  { user }
}

const deleteUser = (id) => {
    const currentUsers =  users.filter((user) => user.id !== id)
    users = [...currentUsers]
    return users
}

module.exports = {
    getUser,
    getUsersInRoom,
    addUser,
    deleteUser
}