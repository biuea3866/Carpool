import mongoose from 'mongoose';
import { ILicense } from '../interfaces/license.interface';

const licenseSchema = new mongoose.Schema<ILicense>({
    birthDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    licNumber: {
        type: String,
        required: true
    },
});

export { licenseSchema };