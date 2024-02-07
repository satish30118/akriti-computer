const express = require('express');
const register = require('../Controller/Auth/register');
const login = require('../Controller/Auth/login');
const profileUpadte = require('../Controller/Auth/profileUpdate');
const {emailVerification, sendEmail} = require('../nodemailer/userMail');
const {forgotpasswordOTP, verifyotp} = require('../nodemailer/forgotpasswordOTP');
const changePassword = require('../Controller/Auth/changePassword');
const router = express.Router();


router.route("/register").post(register);
router.route("/register/send-email").post(sendEmail);
router.route("/register/email-verification").post(emailVerification);
router.route("/login").post(login);
router.route("/forgot-password").post(forgotpasswordOTP)
router.route("/forgot-password/verifyotp").post(verifyotp)
router.route("/profile-update").patch(profileUpadte)
router.route("/change-password").post(changePassword);

module.exports = router;