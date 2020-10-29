const router = require('express').Router()
let phone = require('../models/phone.model')
const multer = require('multer')
const fs = require('fs')


router.route('/').get( (req, res) => {

    phone.find()
        .then(phones => res.json(phones))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


const storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'C:/Users/dell/REACT and EXPRESS Projects/PROKART/prokart/routes/uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 

const upload = multer({storage: storage})

router.route('/add').post( upload.single('image'), (req, res) => {
    const name = req.body.name
    const storage = req.body.storage
    const ram = req.body.ram
    const display = req.body.display
    const price = req.body.price
    const imageBase64 = req.body.imageBase64

    const newPhone = new phone ({
        name,
        storage,
        ram,
        display,
        price,
        imageBase64,
        // image : {
        //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
        //     contentType: 'image/png'
        // }
        image : 'C:/Users/dell/REACT and EXPRESS Projects/PROKART/prokart/routes/uploads' + req.file.filename
    })

    newPhone.save()
        .then( () => res.json('Phone Added!'))
        .catch( err => res.status(400).json(`Error: ${err}`))
})

router.route("/:id").get( (req, res) => {
    phone.findById(req.params.id)
        .then(ph => res.json(ph))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route("/update/:id").post( (req, res) => {
    phone.findById(req.params.id)
        .then( ph => {
            ph.name = req.body.name ? req.body.name : ph.name
            ph.storage = Number(req.body.storage) ? Number(req.body.storage) : ph.storage
            ph.ram = Number(req.body.ram) ? Number(req.body.ram) : ph.ram
            ph.display = req.body.display ? req.body.display : ph.display
            ph.price = Number(req.body.price) ? Number(req.body.price) : ph.price 
            ph.imageBase64 = req.body.imageBase64 ? req.body.imageBase64 : ph.imageBase64
            ph.votesE = Number(req.body.votesE) ? Number(req.body.votesE) : ph.votesE
            ph.votesVG = req.body.votesVG ? req.body.votesVG : ph.votesVG
            ph.votesG = req.body.votesG ? req.body.votesG : ph.votesG
            ph.votesP = req.body.votesP ? req.body.votesP : ph.votesP
            ph.votesVP = req.body.votesVP ? req.body.votesVP : ph.votesVP

            ph.save()
                .then( () => res.json("Phone Updated"))
                .catch( err => res.status(400).json(`Error: ${err}`))
        })
        .catch( err => res.status(400).json(`Error: ${err}`))
})

module.exports = router