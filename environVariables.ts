import * as dotenv from 'dotenv';
dotenv.config();
export const environVariables: any = {
    MONGO_URI: process.env.mongo_URI
}