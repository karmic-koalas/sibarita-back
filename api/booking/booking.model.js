import mongoose from 'mongoose';
const {Schema} = mongoose;

const bookingSchema = Schema({ 
  client: String,
  owner: String,
  bookingToken: String,
  bookingDate: String,
  tablesInBooking: [String]
})

const booking = mongoose.model('bookings', bookingSchema);

export default booking;

