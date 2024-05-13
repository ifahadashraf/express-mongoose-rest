import { Document, Model, model, Schema} from "mongoose";

export interface ICourseModel extends Document {
    name: string;
    description: string;
    schedule: string;
    enrolledStudents: string[];
}

export let CourseSchema: Schema = new Schema({
    description: { type: String, required: true },
    enrolledStudents: [{ type: String }],
    name: { type: String, required: true },
    schedule: { type: String },
}, { timestamps: true });

export const Course: Model<ICourseModel> = model<ICourseModel>("Course", CourseSchema);
