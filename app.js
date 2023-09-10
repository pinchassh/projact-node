import * as controller from './controller/controller.js';
import express from 'express';
import cors from 'cors';
import morgan from "morgan";
// import axios from 'axios';
import router from './router/router.js';
const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', router);


app.listen(port, async () => {
    // await controller.axiosData();
    console.log(`Server is up and running on port:${port}`);
})