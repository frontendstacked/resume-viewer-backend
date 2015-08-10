// PREFIX: /api

var express = require('express'),
    mongoose = require('mongoose'),
    Job = require('../models/Job'),
    router = express.Router();

router.route('/job')
    // create
    .post(function (req, res) {
        var job = new Job();
        job.org = req.body.org;

        job.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    msg: 'Job created!',
                    data: req.body
                });
            }

        });
    })
    // find all
    .get(function(req, res) {
        Job.find(function(err, jobs) {
            if (err) {
                res.send(err);
            }
            res.json({jobs: jobs});
        });
    });

router.route('/job/:job_id')
    .get(function (req, res) {
        Job.findById(req.params.job_id, function (err, job) {
            if (err) {
                res.send(err);
            }
            res.json(job);
        });
    })
    .put(function (req, res) {
        Job.findById(req.params.job_id, function (err, job) {
            if (err) {
                res.send(err);
            }
            // redefine props here
            job.org = req.body.org;

            // save those changes
            job.save(function (err) {
                if (err) res.send(err);

                res.json({
                    msg: 'Job updated!',
                    _id: job._id
                });
            });
        });
    })
    .delete(function (req, res) {
        Job.remove({
            _id: req.params.job_id
        }, function (err, job) {
            if (err) {
                res.send(err);
            }

            res.json({
                msg: 'Job deleted!',
                _id: req.params.job_id
            });
        });
    });

module.exports = router;
