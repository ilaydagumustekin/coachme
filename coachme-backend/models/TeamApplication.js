import mongoose from 'mongoose';

const teamApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  certificate: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  idNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const TeamApplication = mongoose.model('TeamApplication', teamApplicationSchema);
export default TeamApplication;
