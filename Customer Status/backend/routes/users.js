const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const paymentStatus = 0;
  const projectCost = 0
  const projectProgress = 'Design'
  const projectStatus = 0;

  const newUser = new User({firstName, lastName, paymentStatus, projectCost, projectProgress, projectStatus});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(users => {
        if (users.projectProgress === 'Design') {
            users.projectProgress = 'Permitting';
            users.projectStatus = 20;
        }
        else if (users.projectProgress=== 'Permitting') {
            users.projectProgress = 'Installing';
            users.projectStatus = 40;
        }
        else if (users.projectProgress === 'Installing') {
            users.projectProgress = 'Inspection';
            users.projectStatus = 60;
        }
        else if (users.projectProgress === 'Inspection') {
            users.projectProgress = 'Powering Up';
            users.projectStatus = 80;
        }
        else if (users.projectProgress === 'Powering Up') {
          users.projectProgress = 'Projected Completed';
          users.projectStatus = 100;
      }
        users.paymentStatus = req.body.paymentStatus;

        users.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;