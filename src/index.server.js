const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//environment variable or you can say constants
env.config();

//mongodb connection
mongoose.connect(
    'mongodb://localhost:27017/ecommerce'
).then(() => {
    console.log('Database connected');
});

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});