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
addUser({
    id: 2,
    username: 'Broly',
    room: 'paris'
});
addUser({
    id: 3,
    username: 'Goku',
    room: 'axe'
});

const getUser = (id) => {
    return users.find((user) => user.id === id);
}
//const user = getUser(1);
//console.log(user)
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}
const userList = getUsersInRoom('rep dom');

console.log(userList);