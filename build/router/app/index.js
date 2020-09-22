"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkUserAppLogin_1 = __importDefault(require("../../controllers/Auth/app/checkUserAppLogin"));
var checkingTokenApp_1 = __importDefault(require("../../controllers/Auth/app/checkingTokenApp"));
var getSpecialtyAll_1 = __importDefault(require("../../controllers/Specialty/getSpecialtyAll"));
var getUserById_1 = __importDefault(require("../../controllers/User/getUserById"));
var getWorkerById_1 = __importDefault(require("../../controllers/Worker/app/getWorkerById"));
var curriculumCreate_1 = __importDefault(require("../../controllers/Curriculum/app/curriculumCreate"));
var getNearestWorkers_1 = __importDefault(require("../../controllers/Worker/app/getNearestWorkers"));
var getNewsWorkers_1 = __importDefault(require("../../controllers/Worker/app/getNewsWorkers"));
var getDepartments_1 = __importDefault(require("../../controllers/Department/getDepartments"));
var getProvinceByDeparment_1 = __importDefault(require("../../controllers/Province/getProvinceByDeparment"));
var getDistrictByProvince_1 = __importDefault(require("../../controllers/District/getDistrictByProvince"));
var createNewUser_1 = __importDefault(require("../../controllers/User/app/createNewUser"));
var app = express_1.Router();
app.get('/worker/new', getNewsWorkers_1.default);
app.get('/worker/:id', getWorkerById_1.default);
app.get('/specialty', getSpecialtyAll_1.default);
app.get('/user/:id', getUserById_1.default);
app.get('/department', getDepartments_1.default);
app.get('/province/department/:id', getProvinceByDeparment_1.default);
app.get('/district/province/:id', getDistrictByProvince_1.default);
app.post('/auth/login', checkUserAppLogin_1.default);
app.post('/auth/token/verify', checkingTokenApp_1.default);
app.post('/curriculum/add', curriculumCreate_1.default);
app.post('/worker/nearest', getNearestWorkers_1.default);
app.post('/user/add', createNewUser_1.default);
exports.default = app;
