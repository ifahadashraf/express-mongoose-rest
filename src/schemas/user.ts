import { Document, Model, model, Schema} from "mongoose";

export interface IUserModel extends Document {
    name: string;
    lastName: string;
    email: string;
    birthDate: Date;
    fullName(): string;
}

export let UserSchema: Schema = new Schema({
    birthDate: { type: Date, required: true },
    email: { type: String, required: true },
    lastName: { type: String, required: true },
    name: { type: String, required: true },
}, { timestamps: true });

UserSchema.methods.fullName = function(): string {
    return (this.name.trim() + " " + this.lastName.trim());
};

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
