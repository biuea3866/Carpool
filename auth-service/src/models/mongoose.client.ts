import mongoose from "mongoose";
import { MONGO_DEV_URI } from "../config/env.variable";

mongoose.connect(MONGO_DEV_URI)
        .then(response => {
            console.log("Successfully connected to mongodb");
        });

export { mongoose }; 