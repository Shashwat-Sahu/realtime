const express=require('express')
const app=express();
const http=require ('http');
// const {Server} = require('socket.io');
const server=http.createServer(app);
// const io=new Server(server);

const socket = require("socket.io");
const io = socket(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection',(socket)  => {
    console.log('socket connected',socket.id);
})
const PORT =process.env.PORT || 8000;
server.listen(PORT,()=> console.log(`Listening on port ${PORT}`));