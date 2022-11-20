import mongoose from 'mongoose';

const dbConnect = async (connectionString: string) => {
	const connectOptions: any = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	console.log('Trying to connect to Mongo Database...');
	try {
		await mongoose.connect(connectionString, connectOptions);
		mongoose.connection.on('error', (err) => {
			console.log('Event Mongo error');
			console.log(err);
		});
		mongoose.connection.on('disconnected', (err) => {
			console.log('Event Mongo disconnected');
			console.log(err);
		});

		console.log('MongoDB Connected Successfully');
	} catch (err) {
		console.error('Error, Cannot connect to MongoDB', err.message);
		console.error(err);
		throw new Error(err);
	}
};

export default dbConnect;
