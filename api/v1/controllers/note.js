var Models = require('../models/index').models

module.exports = {
  //create note
  createNote: function (req, res) {
    Models.Note.create(req.body, function (err, note) {
      if (err) {
        console.log(err)
        res.status(400).json({
          msg: 'Error occuerd while Creating Note',
          data: err,
        })
      } else {
        res.status(200).json({
          msg: 'Note has been created',
          data: note,
        })
      }
    })
  },
  // list notes
  listNotes: function (req, res) {
      var offset = req.params.offset || 0;
      var limit = req.params.limit || 10;
    Models.Note.find(
      {},
      null,
      {
        sort: {
          createdAt: -1,
        },
        skip: Number(offset),
        limit: Number(limit)
      },
      function (err, notes) {
        if (err) {
          console.log(err)
          res.status(400).json({
            msg: 'Error occuerd while fetching Notes',
            data: err,
          })
        } else {
          res.status(200).json({
            msg: 'Notes have been Fetched',
            data: notes,
          })
        }
      },
    )
  },
}
