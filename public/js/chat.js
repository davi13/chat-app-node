const socket = io();

//Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button')

socket.on('message', (message) => {
    console.log(message)
});

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //disable

    $messageFormButton.setAttribute('disabled', 'disabled');

    const message = e.target.elements.message.value


    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value = '';
        //enable
        if (error) {
            return console.log(error);
        }
        console.log('The message was delivered!', message)
    });
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is no supported by your browser');
    }
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared!');
        })
    })
})