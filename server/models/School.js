import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: String,
  address: String,
});

export default mongoose.model('School', schoolSchema);
