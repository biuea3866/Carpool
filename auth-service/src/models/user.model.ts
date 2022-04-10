import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { licenseSchema } from './license.model';

const userSchema: Schema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        required: true
    },
    license: {
        type: licenseSchema,
        required: false
    }
});

const User: Model<IUser> = mongoose.model("User", userSchema);

export { User };