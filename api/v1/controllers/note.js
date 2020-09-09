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
    var offset = req.params.offset || 0
    var limit = req.params.limit || 10
    Models.Note.find(
      {},
      null,
      {
        sort: {
          createdAt: -1,
        },
        skip: Number(offset),
        limit: Number(limit),
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
  deleteNote: function (req, res) {
    Models.Note.deleteOne(
      {
        _id: req.params.id,
      },
      function (err, note) {
        if (err) {
          console.log(err)
          res.status(400).json({
            msg: 'Error occuerd while processing request',
          })
        } else {
          res.status(200).json({
            msg: 'Note has been Deleted',
            deletedCount: note.deletedCount,
            ok: note.ok,
          })
        }
      },
    );
  },
  updateNote: function (req, res) {
    Models.Note.updateOne(
      {
        _id: req.params.id,
      },
      req.body,
      (err, note) => {
        if (err) {
          console.log(err)
          res.status(400).json({
            msg: 'Error occured while processing request',
          })
        } else {
          res.status(200).json({
            msg: 'Note has been updated',
            modified: note.nModified,
            ok: note.ok,
          })
        }
      },
    )
  }
}
