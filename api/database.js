import mongoose from 'mongoose';

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL is not set');
}

export const connect = async () => {
  console.log('[db] Connecting to database', url);

  mongoose
	.connect(url)
	.then(() => console.log("Connected to MongoDB, node-goat-tbbc!"))
	.catch((err) => console.error("Could not connect to MongoDB", err));

};
