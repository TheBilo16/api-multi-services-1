import { Authentication } from "../../interfaces/Authentication";
import User from "../../../database/models/User";
import District from "../../../database/models/District";
import Province from "../../../database/models/Province";

class UserAppAuthentication implements Authentication {
  public check = async (username : string, password : string) => {
    try{
      const userFind = await User.findOne({
        attributes : ['id','name','lastname','profileImage','username','description','createdAt'],
        include : [
          {
            model : District,
            attributes : ['id','name'],
            include : [
              { 
                model : Province,
                attributes : ['id','name']
              }
            ]
          }
        ],
        where : { 
          username,
          password
        }
      });
      
      return userFind;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default UserAppAuthentication;