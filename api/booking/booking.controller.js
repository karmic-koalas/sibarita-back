import bookingModel from './booking.model.js'
import express from "express";

export function getAllBookings(req, res) {
    return bookingModel.find().then(
        (response) => {
            return res.json(response)
        }
    )
}

// Get all bookings from one company!!!
export function getAllBookingsByToken(req, res) {
    return bookingModel.findById({bookingToken : req.params.bookingToken}).then(
        (response) => {
            if (response === null) {
                return []
            } else {
                return res.json(response)
            }
        }
    )
}