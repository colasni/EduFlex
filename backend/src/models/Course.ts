import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
    courseName: string; 
    category: string;
    price:  number;
    description: string;
    image?: string;
}

const CourseSchema: Schema= new Schema({
    courseName: { type: String, required: true, unique: true },
    category: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
});

export default mongoose.model<ICourse>('Course', CourseSchema);