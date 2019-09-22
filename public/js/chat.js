const socket = io();

socket.on('messageUpdated', (message) => {
    console.log('The count has been updated!', message)
});

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('clicked');
//     socket.emit('increment');
// })