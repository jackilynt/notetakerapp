const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const router = Router();

// your api routes
router.get("/notes", (req, res) => {
  // what you could return, replace the  <{ message: "hit" }> with the actual data from db.json
  fs.readFromFile("./notes").then((data) => res.json(JSON.parse(data)));

  res.status(200).json(`${req.method} request received to get new notes`);
});
router.post("/notes", (req, res) => {
  console.info(`${req.method} request received to add a new note`);
  // building the new note
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(newNote);
});

module.exports = router;
