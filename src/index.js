import express from "express"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})