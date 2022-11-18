const express=require('express');
const router=express.Router();
router.get('/fechas', (req, res)=>{
    res.send('fechas recogidas');
    

});
module.exports=router;
