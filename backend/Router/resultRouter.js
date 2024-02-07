const express = require('express');
const result = require('../Controller/Results/Result');
const searchResult = require('../Controller/Results/searchResult');
const router = express.Router();

router.route("/result").post(result);
router.route("/search-result").post(searchResult);





module.exports = router;