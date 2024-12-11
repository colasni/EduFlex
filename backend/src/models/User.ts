import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    direccion: string;
}

const UserSchema: Schema= new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    direccion: {type: String, required: true}
});

export default mongoose.model<IUser>('User', UserSchema);