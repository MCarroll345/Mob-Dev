
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const indexRoutes = require('./routes/indexRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

connectDB();

app.use('/', indexRoutes);
app.use('/products', productRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port: ${PORT}`);
})