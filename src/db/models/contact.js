import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    number: {
        type: String, required: true
    },
    owner: {
        type: String, required: true
    }
  },
  {
    versionKey: false,
  }
);

export const Contact = model('contact', contactSchema);
