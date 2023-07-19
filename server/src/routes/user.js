const express = require('express')
const router = express.Router()
router.get('/user',(req,res)=>{
    res.status(200).json({message:"got it"})
})

router.post("/login",(req,res)=>{
    const myUserName = 'user'
    const myPassword = '123'
    const {userName,password} = req.body
    if(myUserName==userName){
        
    }
    
})

module.exports = router  