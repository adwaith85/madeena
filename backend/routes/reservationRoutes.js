const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/send-otp', reservationController.sendOtp);

router.post('/verify-otp', reservationController.verifyOtp);

router.post('/book', reservationController.createReservation);

router.get('/occupied-slots/:date', reservationController.getOccupiedSlots);

router.get('/confirm/:id', reservationController.confirmReservation);

module.exports = router;
