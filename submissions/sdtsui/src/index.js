console.log('index.js');
let socket= new WebSocket('ws://localhost:4000');
socket.onopen= function() {
    socket.send('hello');
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};