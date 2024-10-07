//server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const DriverauthRoutes = require('./routes/driverAuth');
const bookingRouter = require('./routes/booking');
const searchRouter = require('./routes/search')
const reviewRouter=require('./routes/reviewRouter')
const driverRouter=require('./routes/driverRoutes')
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect(MONGO_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use auth routes
app.use('/api/auth', authRoutes);
app.use('/api/driverAuth',DriverauthRoutes)
app.use('/api/booking', bookingRouter);
app.use('/api/search', searchRouter);
app.use('/api/reviewRouter',reviewRouter)
app.use('/api/driverRoutes',driverRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


