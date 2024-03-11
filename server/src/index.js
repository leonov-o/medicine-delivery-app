import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.js';
import fileUpload from 'express-fileupload';
import cors from 'cors'

const app = express();
app.use(cors(
    {
        origin: '*',
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}


startApp();

