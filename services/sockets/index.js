const { postMessage } = require('../localData')

module.exports = (io) => {
  io.on('connect', (socket) => {
    socket.on('join', ({ chatId }) => {
      // const { error, user } = addUser({ id: socket.id, name, room });
      socket.join(chatId);
  
      // socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    });

    socket.on('sendMessage', ({ chatId, msg }) => {
      postMessage(msg)
  
      io.to(chatId).emit('message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User has disconnected');
    })
  });
}