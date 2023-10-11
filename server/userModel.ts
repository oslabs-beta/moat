import 'dotenv/config'
import { Schema, model, connect } from 'mongoose';

//TODO: Utilize .env file to protect the connection string

interface IUser {
  username: string;
  password: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

//TODO: Set up pre-functions to implement encryption with BCrypt

const User = model<IUser>('User', userSchema);

run().catch(err => console.log(err));

//TODO: Move sensitive info into .env file

async function run() {
  await connect(process.env.DB_URI!);
  console.log('Connected to Database');
}

export { User };