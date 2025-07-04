const express = require('express');

const  { BookingController } = require('../../controllers/index');
//const { createChannel } = require('../../utils/meassageQueue');

// const channel = await createChannel();
const bookingController = new BookingController(channel);
const router = express.Router();

router.post('/bookings', BookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);
module.exports = router;