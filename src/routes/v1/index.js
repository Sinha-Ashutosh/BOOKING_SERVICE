const express = require('express');

const  { BookingController } = require('../../controllers/index');
//const { createChannel } = require('../../utils/meassageQueue');

// const channel = await createChannel();
const bookingController = new BookingController();
const router = express.Router();

router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);
module.exports = router;