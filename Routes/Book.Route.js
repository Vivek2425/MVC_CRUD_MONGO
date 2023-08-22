const express = require('express');
const BookController = require('../Controller/Book.Controller');
const router = express.Router();

router.get("/",BookController.GetData)
router.post("/",BookController.CreateData)
router.post("/data/:id",BookController.FindData)
router.put("/:id",BookController.UpdateData)
router.delete("/:id",BookController.DeleteData)

module.exports = router;