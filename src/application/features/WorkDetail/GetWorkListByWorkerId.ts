import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";

class GetWorkListByWorkerId {
  public exec = async (workerId : number) => {
    try {
      let works = await WorkDetail.findAll({
        include : [
          {
            model : User,
            attributes : ['id','profileImage'],
            include : [
              {
                model : District,
                attributes : ['id','name','location'],
                include : [
                  {
                    model : Province,
                    attributes : ['id','name','location']
                  }
                ]
              }
            ]
          }
        ],
        attributes : ['id','title','description','price','finished','state','createdAt'],
        where : {
          workerId
        } 
      });

      return works;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default GetWorkListByWorkerId;