const socket = io();

// add id
socket.on("connect", () => {
    console.log("connected to server", socket.id);
});