import { Cache } from "../model/cache.model.js";

const addCache=async (req,res) => {
  const {key,value}=req.body;
  if(!(key || value)){
    res.status(400).json({error:"Please send valid data"})
  }
  const cache={
  key,value
  }
   const newCache= new Cache(cache)
   const savedCache=await newCache.save()
   res.status(201).json({message:"cache is added to database",data:savedCache})
}

const readCache=async(req,res) =>{
    const {key}=req.params;
   const cache=await Cache.findOne({key})
   if(!cache){
    res.status(404).json({error:"no cache found in db"})
   }
   res.status(200).json(cache)
}

const removeCache=async (req,res) => {
    const {key}=req.params;
    const cache=await Cache.findOneAndDelete({key})
    if(!cache){
       return res.status(404).json({error:"not found"})
    }
    res.status(200).json({mesage:"cache is deleted",data:cache})
}

export {addCache,readCache,removeCache}