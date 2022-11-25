import { Schema, model, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
}

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId, ref: "User"
  }
}, {
  timestamps: true
});

export default model<IContact>('Contact', ContactSchema);