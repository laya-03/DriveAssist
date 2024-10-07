//booking.js(models)

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  city: { type: String, required: true },
  vehicleType: { type: String, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
