const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user')



// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views', 'covid.html'));
// })



router.get('/', (req, res) => {
    res.render('covid')
})

    router.post('/', async (req, res) => {
        res.send('Thank you for submitting')
    try{
        console.log(req.body)
        const items = new User(req.body);
    await items.save();
        res.send("Thank You for Submitting")
    } catch (err) {
        res.send('Sorry! Something went wrong');
        console.log(err)
    }
})




module.exports = router;