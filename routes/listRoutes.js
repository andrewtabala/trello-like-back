const express = require("express");
const router = express.Router();
const {
  updateListController,
  getListsController,
  deleteListController,
  addListController
} = require("../controllers/listController")

router.post("/update-list", updateListController);
router.post("/delete-list", deleteListController);
router.post("/add-list", addListController);
router.get("/get-lists", getListsController);

module.exports = router;