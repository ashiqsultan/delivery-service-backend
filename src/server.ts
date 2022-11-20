require('dotenv').config();
import app from './app';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
	console.log("node version", process.version)
	const GREEN_LINE = '\x1b[32m%s\x1b[0m';
	console.log(GREEN_LINE, 'Server started');
	console.log(`Port: ${app.get('port')}`);
	console.log(`Environment: ${app.get('env')}`);
});

export default server;