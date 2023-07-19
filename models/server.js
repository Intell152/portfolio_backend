const express = require('express');
const cors = require('cors');

const emailRouter = require('../routes/email');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.emailPath = '/api/e-mail';
        
        // Middlewares
        this.middlewares();

        // App Routes
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.emailPath, emailRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('App listening at http://localhost:', this.port)
        });
    }
}

module.exports = Server;