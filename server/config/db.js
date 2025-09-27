import mongoose from 'mongoose';

async function connectDB(uri) {
  try {
    await mongoose.connect(uri, { dbName: 'edureach' });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Mongo connection error', err);
    process.exit(1);
  }
}

export { connectDB };
