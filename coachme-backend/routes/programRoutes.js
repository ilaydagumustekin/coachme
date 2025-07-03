const express = require("express");
const router = express.Router();
const {
  getPrograms,
  getProgramById,
} = require("../controllers/programController");

router.route("/").get(getPrograms); // Çalışıyor.
router.route("/:id").get(getProgramById); // Çalışıyor.

module.exports = router;
