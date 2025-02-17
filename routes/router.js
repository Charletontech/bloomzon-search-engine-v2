const express = require("express");
const router = express.Router();
const {
  imageSearchController,
  barcodeSearchController,
  voiceSearchController,
  viewController,
  fuzz,
} = require("../controllers/controller");

// public routes
router.get("/", viewController);

// private routes
router.post("/api/image-search", imageSearchController);
router.post("/api/barcode-search", barcodeSearchController);
router.post("/api/voice-search", voiceSearchController);
module.exports = router;
