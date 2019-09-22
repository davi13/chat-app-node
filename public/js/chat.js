const socket = io();

socket.on('message', (message) => {
    console.log(message)
});

document.querySelector('#sendMessage').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.elements.message.value);
    e.target.elements.message.value = ''
    socket.emit(e.target.elements.message.value);
})