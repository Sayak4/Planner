const express = require('express');
const router = express.Router();

// Goal model
const Goal = require('../../models/Goal');

// @route GET api/goals
// @desc all goals
// @access Public
router.get('/',(req,res)=>{
    Goal.find()
        .sort({date : -1})
        .then( (goals) => { res.json({allGoals : goals})});
})

// @route POST api/goals
// @desc Create a new goal
// @access Public
router.post('/',(req,res)=>{
    const newGoal = new Goal({
        name : req.body.name
    });

    newGoal.save()
        .then( (item) => {res.json({item})})

})

// @route DELETE api/goals/:id
// @desc Delete a goal
// @access Public
router.delete('/:id',(req,res)=>{
    Goal.findById(req.params.id)
        .then( (item) => {
            item.remove()
                .then( (item) => {res.json({success : true})})
        })
        .catch(() => {res.status(404).json({success :false})});

})
module.exports = router;