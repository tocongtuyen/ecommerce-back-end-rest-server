const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user')

//environment variable or you can say constants
env.config();

//mongodb connection
mongoose.connect(
    'mongodb://localhost:27017/ecommerce'
).then(() => {
    console.log('Database connected');
});

app.use(bodyParser());
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});