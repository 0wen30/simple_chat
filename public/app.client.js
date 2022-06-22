const socket = io();

const form = document.getElementById('form');
const input = form["texto_previo"];
const messages = document.getElementById('messages');

const enviarMensaje = e => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
}

socket.on('chat message', function(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

form.addEventListener('submit', enviarMensaje);