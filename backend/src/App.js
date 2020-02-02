const app           =   require('express')
const router        =   require('./routes');
const http          =   require('http')
const cors          =   require('cors')

const { setupWebsocket} = require('./websocket')

class App{
    constructor (){
        this.server = app();
        this.serverHTTP    =   http.Server(this.server)
        setupWebsocket(this.serverHTTP)
        this.Middleware()   ;
        this.Routes()       ;

    }

    Middleware(){
        this.server.use(cors());
        this.server.use(app.json())
      
    
    }

    Routes(){
        this.server.use(router);  // Passando 0 arquivo de rotas para servidor
       
        

    }
}



module.exports = new App().serverHTTP;