var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var note = require("../controllers/note");


router.get("/", index.home);
router.post("/create-note",note.createNote);
router.get("/list-notes/:offset/:limit",note.listNotes);





module.exports = router;