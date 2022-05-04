const router = require('express').Router();
const controller = require('./booking.controller');


router.get('/', controller.getAllBookings);
router.get('/:id', controller.getAllBookingsByToken);

export default router;


module.exports = router;