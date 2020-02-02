import sockets from 'socket.io-client'

const socket = sockets('http://192.168.0.105:3333', {
    autoConnect:false,
   
});

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction );
}


function connect(data){
    socket.io.opts.query   =   data;

    socket.connect();


    socket.on('message', text =>{
        console.log(text);
    })
}


function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export  {
    connect,
    disconnect,
    subscribeToNewDevs,
};