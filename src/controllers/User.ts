import { Request, Response } from "express";
import User from "../application/database/mysql/models/User";
import District from "../application/database/mysql/models/District";
import Worker from "../application/database/mysql/models/Worker";

export const getUsers = async (req : Request, res : Response) => {
  try{
    const users = await User.findAll({
      attributes : ['id','fullname','username','password','description','profileImage','createdAt'],
      include : [
        {
          model : District,
          attributes : ['name']
        },
        {
          model : Worker,
          required:false,
        }
      ],
    });
    
    res.status(200).json(users);
  }catch(e){
    console.log(e);
    res.status(500).json({ response : e.message });
  }
}

export const getUserByName = async (req:Request,res:Response)=>{
  try {
    const { fullname } = req.body;
    const users = await User.findAll({
      attributes : ['id','fullname','username','password','description','profileImage','createdAt'],
      include : [
        {
          model : District,
          attributes : ['name']
        }
      ],
      where : { fullname }
    })
    res.status(200).json(users);

  }catch(e){
    console.log(e.message)
    res.status(500).json({error:e.message})
  }
}

export const userDelete = async (req : Request, res : Response) => {
  const { id } = req.body;

  try {
    const isDelete = await User.destroy({ 
      where : { id } 
    });

    res.status(200).json({ isDelete });
  }catch(e) { 
    console.log(e.message);
    res.status(500).json({ response : e.message });
  }
}

export const userUpdate = async (req : Request, res : Response) => {
  try {
    //district -> idDistrict
    const { name , username , password , lastName , districtID , id } = req.body;
    await User.update({
      name,username,password,lastName,districtID
    }, { where : { id } })
    

  } catch(e){ console.log(e.message) }

}