const router = require('express').Router()
let comment = require('../models/comments.model')

router.route('/').get( (req, res) => {
    comment.find()
        .then( comments => res.json(comments))
        .catch( err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post( (req, res) => {
    const phone = req.body.phone
    const user = req.body.user
    const text = req.body.text

    const newComment = new comment ({
        phone,
        user,
        text
    })

    newComment.save()
        .then( () => res.json("Comment Added!"))
        .catch( err => res.status(400).json(`Error: ${err}`))
})

module.exports = router


