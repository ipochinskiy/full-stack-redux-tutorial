import Server from 'socket.io';

const startServer = (store) => {
    const io = new Server().attach(8090);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
    });
};

export default startServer;