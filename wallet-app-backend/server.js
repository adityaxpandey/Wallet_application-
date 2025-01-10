const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const walletRoutes = require('./routes/walletRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
