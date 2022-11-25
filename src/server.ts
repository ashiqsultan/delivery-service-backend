require('dotenv').config();
import app from './app';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: true
  },
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

/**
 * Start Express server.
 */
server.listen(app.get('port'), () => {
  console.log('node version', process.version);
  const GREEN_LINE = '\x1b[32m%s\x1b[0m';
  console.log(GREEN_LINE, 'Server started');
  console.log(`Port: ${app.get('port')}`);
  console.log(`Environment: ${app.get('env')}`);
});

export default server;
