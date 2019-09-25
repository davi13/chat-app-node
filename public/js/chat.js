const socket = io();

//Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $locationButton = document.querySelector('#send-location');

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
        $messageFormInput.focus();
        //enable
        if (error) {
            return console.log(error);
        }
        console.log('The message was delivered!', message)
    });
})

$locationButton.addEventListener('click', () => {
    //disable

    $locationButton.setAttribute('disabled', 'disabled')

    if (!navigator.geolocation) {
        return alert('Geolocation is no supported by your browser');
    }
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            $locationButton.removeAttribute('disabled')
            console.log('Location shared!');
        })
    })
})