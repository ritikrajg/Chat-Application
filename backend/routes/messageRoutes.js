const express=require("express")
const {sendMessage,getMessage}=require("../controllers/messageController")
const { authenticateUser } = require('../middleware/isAuthenticated')
const router=express.Router();

router.post("/send/:id",authenticateUser,sendMessage)
router.get("/:id",authenticateUser,getMessage)
module.exports=router