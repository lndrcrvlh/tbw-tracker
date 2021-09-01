const express=require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.get('/signup', (req,res) =>{
  res.send('hello');
})

router.post('/signup', (req, res) => {
  const {name, email,password}=req.body
  console.log(req.body)
  if(!email || !name || !password) {
    return res.status(422).json({error:'Please Fill out all Fields'})
  }
  User.findOne({email:email})
  .then((savedUser)=>{
    if(savedUser){
      return res.status(422).json({error:'User already Exists'})
    }
    const user=new User({
      email,
      password,
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
  .catch((err)=>{
    console.log(err)
  })
})

module.exports = router