const express = require('express');
const { errorHandler } = require('./utils/handleErrors');

const Route = require('./router/userRouter');
const { connectDatabase } = require('./config/database');
const { setHeaders } = require('./middlewares/headers');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

connectDatabase();

app.use(setHeaders);



app.use(Route);

app.use(errorHandler);

const port = 4000;
app.listen(port , () => {`app is running on port ${port}`})