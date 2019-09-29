const users = [];
//addUser, removeUser, getUsers, getUSerInroom
const addUser = ({ id, username, room }) => {
    //Clean th data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validete the data
    if (!username || room) {
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

addUser({
    id: 22,
    username: 'davi',
    room: 'paris'

});

console.log(users)