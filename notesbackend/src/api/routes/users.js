const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


router.post('/', async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password,
        contact : req.body.contact,
        
    })
    user.save()
    res.status(200).json({  _id: user._id,
      userName: user.userName,
      email: user.email,
      password:user.password,
      contact:user.contact,
     })
});

router.post("/login", async(req, res) => {
    try{
        const user = await findByCredentials(req.body.email, req.body.password);
        if (user) {
            res.send({
              _id: user._id,
              userName: user.userName,
              email: user.email,
              password:user.password,
            });
          } else {
            res.status(401).send({ message: 'Invalid Email or Password.' });
          }
        
    }catch(e){
        console.log(e);
        res.status(400).send()
    }
})

findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user){
        throw new Error('unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('unable to login');
    }
    return user;
};

module.exports = router;