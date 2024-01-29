// Create web server

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

// GET: /comments
// Get all comments
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// POST: /comments
// Create new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

// GET: /comments/:id
// Get comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

// PUT: /comments/:id
// Update comment by id
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

// DELETE: /comments/:id
// Delete comment by id
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

module.exports = router;

