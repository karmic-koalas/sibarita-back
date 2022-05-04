import controller from '../company/company.controller';
const bookingModel = require('./booking.model');
const { response } = require('express');
module.exports.getAllBookings = getAllBookings;
module.exports.getAllBookingsByToken = getAllBookingsByToken;


function getAllBookings(req, res) {
    return bookingModel.find().then(
        (response) => {
            return res.json(response)
        }
    )
}


// Get all bookings from one company!!!
function getAllBookingsByToken(token) {
    return bookingModel.findById(token).then(
        (response) => {
            if (response === null) {
                return []
            } else {
                return response
            }
        }
    )
}