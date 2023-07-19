const express = require('express')
const router = express.Router()
router.get('/login',(req,res)=>{
    
    res.status(200).json({message:"got it"})
    
})

module.exports = router