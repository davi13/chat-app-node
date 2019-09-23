const socket = io();

socket.on('message', (message) => {
    console.log(message)
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(e.target.elements.message.value);
    //e.target.elements.message.value = ''
    const message = document.querySelector('input').value
    message.value = ''
    //socket.emit(e.target.elements.message.value);
    socket.emit('sendMessage', message);
})