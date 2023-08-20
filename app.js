import express from 'express';
const app = express();
import  morgan  from "morgan";
import router from './router/router.js';
const port = 3000;
app.use(express.json())
app.use('/api', router);


app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})