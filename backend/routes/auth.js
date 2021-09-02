const express=require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

router.get('/signup', (req,res) =>{
  res.send('hello');
})

router.post('/signup', (req, res) => {
  const {name, email,password}=req.body
  console.log(req.body)
  if(!email || !name || !password) {
    return res.status(422).json({error:'Please Fill out all Fields'})
  }
  bcrypt.hash(password,12)
  .then((hashedpw) => {
    User.findOne({email:email})
    .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:'User already Exists'})
      }
      const user=new User({
        email,
        password:hashedpw,
        name,
      })
      user.save()
      .then((user)=>{
        res.json({message:'Saved Successfully'})
        console.log(user.email)
      })
      .catch((err)=>{
        console.log(err)
      })
    })
    .catch((err) =>{
      console.log(err)
    })
  })
  .catch((err)=>{
    console.log(err)
  })
})

router.post('/login', (req,res)=>{
  const {email, password}=req.body;
  if(!email || !password) {
    return res.status(422).json({error:'Please add all fields'})
  }
  User.findOne({email:email})
  .then((savedUser)=>{
    if(!savedUser){
      return res.status(422).json({error: "Not a user"})
    }
    bcrypt.compare(password, savedUser.password)
    .then(match =>{
      if(match) {
        const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
        res.json({token:token})
      }
      else {
        return res.status(422).json({error:'Not a match'})
      }
    })
    .catch((err) =>{
      console.log(err)
    })
  })
})

const login=require('../middleware/login')

router.get('/protected', (req,res)=>{
  res.send('hello')
})

module.exports = router