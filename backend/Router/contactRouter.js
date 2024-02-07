const express = require("express");
const contactForm = require("../Controller/ContactForm/contactform");
const router = express.Router();


router.route("/contact").post(contactForm);


module.exports = router;
