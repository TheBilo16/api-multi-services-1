import dotenv from 'dotenv';
dotenv.config();

import sequelize from '.';
import './associations';

import Admin from './models/Admin';
import User from './models/User';
import District from './models/District';
import Province from './models/Province';
import Department from './models/Department';
import Worker from './models/Worker';
import Specialty from './models/Specialty';
import WorkDetail from './models/WorkDetail';

//Admin
const admin = [
  { username : 'admin' , password : 'admin' },
  { username : 'admin2' , password : 'admin2' }
];

//Department
const deparment = [
  { name : 'Piura' },
  { name : 'Lima' },
  { name : 'Pucallpa' }
];

//Province
const province = [
  { departmentId : 1, name : 'Province Piura 1' },
  { departmentId : 1, name : 'Province Piura 2' },
  { departmentId : 2, name : 'Rimac' },
  { departmentId : 2, name : 'San Juan de Lurigancho' },
  { departmentId : 3, name : 'Province Pucallpa 1' },
  { departmentId : 3, name : 'Province Pucallpa 2' }
];

//District
const district = [
  { provinceId : 1 , name : 'Rimac' },
  { provinceId : 1 , name : 'Pachacutet' },
  { provinceId : 2 , name : 'District 3' },
  { provinceId : 2 , name : 'District 4' },
  { provinceId : 3 , name : 'District 5' },
  { provinceId : 3 , name : 'District 6' }
];

//User
const user = [
  { fullName : 'Billy paredes' , username : 'billy' , password : '123456' , districtId : 1 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Imanol Rojas' , username : 'imanol' , password : '123456', districtId : 2 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Ttito chavez' , username : 'ttito' , password : '123456', districtId : 3 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Cezar jefe' , username : 'cezar' , password : '123456', districtId : 1 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Jhony Vega' , username : 'desconocido' , password : '123456', districtId : 2 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'}
];

//Specialties
const specialty = [
  { name : 'Gasfitero' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Programador' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Albañil' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Electricista' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Desarrollador Grafico' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
];

//Worker
const worker = [
  { userId : 1 , specialtyId : 1 , basePrice : 15 , backgroundImage : 'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg' },
  { userId : 2 , specialtyId : 3 , basePrice : 15 , backgroundImage : 'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg' }
];

(async () => {

  try{
    await sequelize.sync({ force : true });

    await Admin.bulkCreate(admin);
    await Department.bulkCreate(deparment);
    await Province.bulkCreate(province);
    await District.bulkCreate(district);
    await User.bulkCreate(user);
    await Specialty.bulkCreate(specialty);
    await Worker.bulkCreate(worker);
  } catch(e){ 
    console.log(e) 
  }

})();