const users = [];
//addUser, removeUser, getUsers,getUSerInroom
const addUser = ({ id, username, room }) => {
    //Clean th data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validete the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    });

    //Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user);
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }

}

addUser({
    id: 1,
    username: 'davi',
    room: 'paris'

});

const getUser = (id) => {
    const myUser = users.find((user) => user.id === id);
    return myUser;
}

const res = getUser(4);
console.log(res);
