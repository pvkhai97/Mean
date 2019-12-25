/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(16);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('Student API')
        .setVersion('1.0.0')
        .setBasePath('api')
        .addBearerAuth()
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('api/docs', app, swaggerDocument);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useStaticAssets('upload');
    await app.listen(3002);
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const auth_module_1 = __webpack_require__(5);
const departments_module_1 = __webpack_require__(34);
const sectors_module_1 = __webpack_require__(42);
const subjects_module_1 = __webpack_require__(52);
const thesis_module_1 = __webpack_require__(26);
const students_module_1 = __webpack_require__(19);
const teachers_module_1 = __webpack_require__(47);
const serve_static_1 = __webpack_require__(58);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://cluster0-r6l6b.azure.mongodb.net', {
                user: 'admin',
                pass: 'pvduc196',
                dbName: 'test',
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: 'client',
            }),
            auth_module_1.AuthModule,
            departments_module_1.DepartmentsModule,
            sectors_module_1.SectorsModule,
            subjects_module_1.SubjectsModule,
            thesis_module_1.ThesisModule,
            students_module_1.StudentsModule,
            teachers_module_1.TeachersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(7);
const jwt_stategy_service_1 = __webpack_require__(11);
const constants_1 = __webpack_require__(13);
const auth_controller_1 = __webpack_require__(14);
const students_module_1 = __webpack_require__(19);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            students_module_1.StudentsModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '10h' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_stategy_service_1.JwtStrategyService],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(7);
const students_service_1 = __webpack_require__(8);
let AuthService = class AuthService {
    constructor(studentsService, jwtService) {
        this.studentsService = studentsService;
        this.jwtService = jwtService;
    }
    async validate(email, password) {
        const admin = await this.studentsService.findByEmail(email);
        if (admin && await admin.isValidPassword(password)) {
            return admin;
        }
        return null;
    }
    async login(user) {
        const payload = { sub: user._id };
        return {
            token: this.jwtService.sign(payload),
            email: user.email,
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(4);
let StudentsService = class StudentsService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async find() {
        return await this.studentModel
            .find()
            .populate('sector')
            .exec();
    }
    async findById(studentId) {
        return await this.studentModel.findById(studentId).populate('sector').exec();
    }
    async findByEmail(email) {
        return await this.studentModel.findOne({ email }).exec();
    }
    async create(createStudentDto) {
        return await this.studentModel.create(Object.assign(Object.assign({}, createStudentDto), { password: createStudentDto.email }));
    }
    async update(studentId, updateStudentDto) {
        return await this.studentModel
            .findOneAndUpdate(studentId, updateStudentDto)
            .exec();
    }
    async delete(studentId) {
        return await this.studentModel.findByIdAndDelete(studentId).exec();
    }
    async findBySectorId(sectorId) {
        return await this.studentModel.find({ sector: sectorId }).exec();
    }
};
StudentsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Student')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StudentsService);
exports.StudentsService = StudentsService;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = __webpack_require__(12);
const passport_1 = __webpack_require__(10);
const common_1 = __webpack_require__(3);
const constants_1 = __webpack_require__(13);
const students_service_1 = __webpack_require__(8);
let JwtStrategyService = class JwtStrategyService extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(studentsService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: constants_1.jwtConstants.secret,
            ignoreExpiration: true,
        });
        this.studentsService = studentsService;
    }
    async validate(payload, done) {
        const user = await this.studentsService.findById(payload.sub);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
};
JwtStrategyService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], JwtStrategyService);
exports.JwtStrategyService = JwtStrategyService;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(6);
const login_dto_1 = __webpack_require__(15);
const change_password_dto_1 = __webpack_require__(18);
const swagger_1 = __webpack_require__(16);
const passport_1 = __webpack_require__(10);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto) {
        const user = await this.authService.validate(loginDto.email, loginDto.password);
        if (user) {
            return this.authService.login(user);
        }
        throw new common_1.BadRequestException('Invalid credentials');
    }
    async changePassword(request, changePasswordDto) {
        const user = await this.authService.validate(request.user.email, changePasswordDto.password);
        if (user) {
            user.password = changePasswordDto.newPassword;
            await user.save();
            return user;
        }
        throw new common_1.BadRequestException('Invalid password');
    }
};
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('change-password'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    swagger_1.ApiUseTags('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __webpack_require__(16);
const class_validator_1 = __webpack_require__(17);
class LoginDto {
}
__decorate([
    swagger_1.ApiModelProperty({ format: 'email' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty({ format: 'password' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __webpack_require__(16);
const class_validator_1 = __webpack_require__(17);
class ChangePasswordDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
exports.ChangePasswordDto = ChangePasswordDto;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const student_schema_1 = __webpack_require__(20);
const students_service_1 = __webpack_require__(8);
const students_controller_1 = __webpack_require__(22);
const thesis_module_1 = __webpack_require__(26);
let StudentsModule = class StudentsModule {
};
StudentsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Student', schema: student_schema_1.default }]),
            thesis_module_1.ThesisModule,
        ],
        providers: [students_service_1.StudentsService],
        controllers: [students_controller_1.StudentsController],
        exports: [students_service_1.StudentsService],
    })
], StudentsModule);
exports.StudentsModule = StudentsModule;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const bcrypt_1 = __webpack_require__(21);
const StudentSchema = new mongoose_1.Schema({
    code: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    sector: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Sector',
    },
});
StudentSchema.pre('save', async function (next) {
    const salt = await bcrypt_1.genSalt(10);
    this.password = await bcrypt_1.hash(this.password, salt);
    next();
});
StudentSchema.method('isValidPassword', async function (plainText) {
    return bcrypt_1.compare(plainText, this.password);
});
exports.default = StudentSchema;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(16);
const students_service_1 = __webpack_require__(8);
const create_student_dto_1 = __webpack_require__(23);
const passport_1 = __webpack_require__(10);
const update_student_dto_1 = __webpack_require__(24);
const thesis_service_1 = __webpack_require__(25);
let StudentsController = class StudentsController {
    constructor(studentService, thesisService) {
        this.studentService = studentService;
        this.thesisService = thesisService;
    }
    async find() {
        return await this.studentService.find();
    }
    async getProfile(request) {
        return await this.studentService.findById(request.user._id);
    }
    async create(createStudentDto) {
        return await this.studentService.create(createStudentDto);
    }
    async update(studentId, updateStudentDto) {
        return await this.studentService.update(studentId, updateStudentDto);
    }
    async delete(studentId) {
        return await this.studentService.delete(studentId);
    }
    async findThesisByStudentId(studentId) {
        return await this.thesisService.findByStudentId(studentId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "find", null);
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getProfile", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id/thesis'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "findThesisByStudentId", null);
StudentsController = __decorate([
    common_1.Controller('students'),
    swagger_1.ApiUseTags('students'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        thesis_service_1.ThesisService])
], StudentsController);
exports.StudentsController = StudentsController;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class CreateStudentDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "code", void 0);
__decorate([
    class_validator_1.IsEmail(),
    swagger_1.ApiModelProperty({ format: 'email' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty({ type: String, format: 'date' }),
    __metadata("design:type", Date)
], CreateStudentDto.prototype, "dateOfBirth", void 0);
__decorate([
    class_validator_1.IsMobilePhone('vi-VN'),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "phoneNumber", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "sector", void 0);
exports.CreateStudentDto = CreateStudentDto;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class UpdateStudentDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "code", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional({ type: String, format: 'date' }),
    __metadata("design:type", Date)
], UpdateStudentDto.prototype, "dateOfBirth", void 0);
__decorate([
    class_validator_1.IsMobilePhone('vi-VN'),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "phoneNumber", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "sector", void 0);
exports.UpdateStudentDto = UpdateStudentDto;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let ThesisService = class ThesisService {
    constructor(thesisModel) {
        this.thesisModel = thesisModel;
    }
    async find() {
        return await this.thesisModel
            .find()
            .populate('teacher')
            .populate('student')
            .populate('subject')
            .exec();
    }
    async create(createThesisDto) {
        return await this.thesisModel.create(createThesisDto);
    }
    async update(thesisId, updateThesisDto) {
        return await this.thesisModel
            .findByIdAndUpdate(thesisId, updateThesisDto)
            .exec();
    }
    async delete(thesisId) {
        return await this.thesisModel.findByIdAndDelete(thesisId).exec();
    }
    async findById(thesisId) {
        return await this.thesisModel.findById(thesisId).exec();
    }
    async findByStudentId(studentId) {
        return await this.thesisModel.find({ student: studentId }).populate('teacher')
            .populate('student')
            .populate('subject').exec();
    }
    async findByTeacherId(teacherId) {
        return await this.thesisModel.find({ teacher: teacherId }).exec();
    }
    async findBySubjectId(subjectId) {
        return await this.thesisModel.find({ subject: subjectId }).exec();
    }
    async updateAttached(thesisId, attached) {
        return await this.thesisModel
            .findByIdAndUpdate(thesisId, { attached }, { new: true })
            .exec();
    }
};
ThesisService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Thesis')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ThesisService);
exports.ThesisService = ThesisService;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const thesis_service_1 = __webpack_require__(25);
const thesis_controller_1 = __webpack_require__(27);
const mongoose_1 = __webpack_require__(4);
const thesis_schema_1 = __webpack_require__(31);
const platform_express_1 = __webpack_require__(30);
const multer_1 = __webpack_require__(32);
const path_1 = __webpack_require__(33);
let ThesisModule = class ThesisModule {
};
ThesisModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Thesis', schema: thesis_schema_1.default }]),
            platform_express_1.MulterModule.register({
                storage: multer_1.diskStorage({
                    destination: './upload',
                    filename: (req, file, cb) => {
                        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                        return cb(null, `${randomName}${path_1.extname(file.originalname)}`);
                    },
                }),
            }),
        ],
        providers: [thesis_service_1.ThesisService],
        controllers: [thesis_controller_1.ThesisController],
        exports: [thesis_service_1.ThesisService],
    })
], ThesisModule);
exports.ThesisModule = ThesisModule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const thesis_service_1 = __webpack_require__(25);
const swagger_1 = __webpack_require__(16);
const passport_1 = __webpack_require__(10);
const create_thesis_dto_1 = __webpack_require__(28);
const update_thesis_dto_1 = __webpack_require__(29);
const platform_express_1 = __webpack_require__(30);
let ThesisController = class ThesisController {
    constructor(thesisService) {
        this.thesisService = thesisService;
    }
    async find() {
        return await this.thesisService.find();
    }
    async create(createThesisDto) {
        return await this.thesisService.create(createThesisDto);
    }
    async update(thesisId, updateThesisDto) {
        return await this.thesisService.update(thesisId, updateThesisDto);
    }
    async delete(thesisId) {
        return await this.thesisService.delete(thesisId);
    }
    async uploadFile(thesisId, file) {
        return await this.thesisService.updateAttached(thesisId, file.filename);
    }
    async getThesisMe(request) {
        return await this.thesisService.findByStudentId(request.user._id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "find", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_thesis_dto_1.CreateThesisDto]),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thesis_dto_1.UpdateThesisDto]),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "delete", null);
__decorate([
    common_1.Post(':id/upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('attached')),
    __param(0, common_1.Param('id')),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "uploadFile", null);
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ThesisController.prototype, "getThesisMe", null);
ThesisController = __decorate([
    common_1.Controller('thesis'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiUseTags('thesis'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [thesis_service_1.ThesisService])
], ThesisController);
exports.ThesisController = ThesisController;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class CreateThesisDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "student", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "teacher", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "subject", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty({ type: String, format: 'date-time' }),
    __metadata("design:type", String)
], CreateThesisDto.prototype, "deadline", void 0);
exports.CreateThesisDto = CreateThesisDto;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class UpdateThesisDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateThesisDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateThesisDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateThesisDto.prototype, "student", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateThesisDto.prototype, "teacher", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateThesisDto.prototype, "subject", void 0);
__decorate([
    class_validator_1.IsDateString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional({ type: String, format: 'date-time' }),
    __metadata("design:type", Date)
], UpdateThesisDto.prototype, "deadline", void 0);
exports.UpdateThesisDto = UpdateThesisDto;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const ThesisSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    student: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Student',
    },
    teacher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    semester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Semester',
    },
    subject: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Subject',
    },
    deadline: {
        type: Date,
    },
    attached: {
        type: String,
    },
    result: {
        type: Number,
    },
});
exports.default = ThesisSchema;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const departments_service_1 = __webpack_require__(35);
const departments_controller_1 = __webpack_require__(36);
const mongoose_1 = __webpack_require__(4);
const department_schema_1 = __webpack_require__(41);
const sectors_module_1 = __webpack_require__(42);
const teachers_module_1 = __webpack_require__(47);
let DepartmentsModule = class DepartmentsModule {
};
DepartmentsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Department', schema: department_schema_1.default },
            ]),
            sectors_module_1.SectorsModule,
            teachers_module_1.TeachersModule,
        ],
        providers: [departments_service_1.DepartmentsService],
        controllers: [departments_controller_1.DepartmentsController],
    })
], DepartmentsModule);
exports.DepartmentsModule = DepartmentsModule;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let DepartmentsService = class DepartmentsService {
    constructor(departmentModel) {
        this.departmentModel = departmentModel;
    }
    async find() {
        return await this.departmentModel.find().exec();
    }
    async findById(departmentId) {
        return await this.departmentModel.findById(departmentId).exec();
    }
    async findByDepartmentId(departmentId) {
        return await this.departmentModel.find({ department: departmentId }).exec();
    }
    async create(createDepartmentDto) {
        return await this.departmentModel.create(createDepartmentDto);
    }
    async update(departmentId, updateDepartmentDto) {
        return await this.departmentModel
            .findByIdAndUpdate(departmentId, updateDepartmentDto)
            .exec();
    }
    async delete(departmentId) {
        return await this.departmentModel.findByIdAndDelete(departmentId).exec();
    }
};
DepartmentsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Department')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const departments_service_1 = __webpack_require__(35);
const swagger_1 = __webpack_require__(16);
const create_department_dto_1 = __webpack_require__(37);
const update_department_dto_1 = __webpack_require__(38);
const sectors_service_1 = __webpack_require__(39);
const passport_1 = __webpack_require__(10);
const teachers_service_1 = __webpack_require__(40);
let DepartmentsController = class DepartmentsController {
    constructor(departmentsService, sectorsService, teachersService) {
        this.departmentsService = departmentsService;
        this.sectorsService = sectorsService;
        this.teachersService = teachersService;
    }
    async find() {
        return await this.departmentsService.find();
    }
    async findById(departmentId) {
        return await this.departmentsService.findById(departmentId);
    }
    async create(createDepartmentDto) {
        return await this.departmentsService.create(createDepartmentDto);
    }
    async update(departmentId, updateDepartmentDto) {
        return await this.departmentsService.update(departmentId, updateDepartmentDto);
    }
    async delete(departmentId) {
        return await this.departmentsService.delete(departmentId);
    }
    async findSectorByDepartmentId(departmentId) {
        return await this.sectorsService.findByDepartmentId(departmentId);
    }
    async findTeacherByDepartmentId(departmentId) {
        return await this.teachersService.findByDepartmentId(departmentId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "find", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_department_dto_1.CreateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_department_dto_1.UpdateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id/sectors'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "findSectorByDepartmentId", null);
__decorate([
    common_1.Get(':id/teachers'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentsController.prototype, "findTeacherByDepartmentId", null);
DepartmentsController = __decorate([
    common_1.Controller('departments'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiUseTags('departments'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService,
        sectors_service_1.SectorsService,
        teachers_service_1.TeachersService])
], DepartmentsController);
exports.DepartmentsController = DepartmentsController;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __webpack_require__(16);
const class_validator_1 = __webpack_require__(17);
class CreateDepartmentDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsMobilePhone('vi-VN'),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "phoneNumber", void 0);
exports.CreateDepartmentDto = CreateDepartmentDto;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __webpack_require__(16);
const class_validator_1 = __webpack_require__(17);
class UpdateDepartmentDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDepartmentDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelPropertyOptional(),
    class_validator_1.IsMobilePhone('vi-VN'),
    __metadata("design:type", String)
], UpdateDepartmentDto.prototype, "phoneNumber", void 0);
exports.UpdateDepartmentDto = UpdateDepartmentDto;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let SectorsService = class SectorsService {
    constructor(sectorModel) {
        this.sectorModel = sectorModel;
    }
    async find() {
        return await this.sectorModel.find().exec();
    }
    async create(createSectorDto) {
        return await this.sectorModel.create(createSectorDto);
    }
    async update(sectorId, updateSectorDto) {
        return await this.sectorModel
            .findByIdAndUpdate(sectorId, updateSectorDto)
            .exec();
    }
    async delete(sectorId) {
        return await this.sectorModel.findByIdAndDelete(sectorId).exec();
    }
    async findById(sectorId) {
        return await this.sectorModel.findById(sectorId).exec();
    }
    async findByDepartmentId(departmentId) {
        return await this.sectorModel.find({ department: departmentId }).exec();
    }
};
SectorsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Sector')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SectorsService);
exports.SectorsService = SectorsService;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(4);
let TeachersService = class TeachersService {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async find() {
        return await this.teacherModel
            .find()
            .populate('department')
            .exec();
    }
    async findById(teacherId) {
        return await this.teacherModel.findById(teacherId).exec();
    }
    async findByEmail(email) {
        return await this.teacherModel.findOne({ email }).exec();
    }
    async create(createTeacherDto) {
        return await this.teacherModel.create(Object.assign(Object.assign({}, createTeacherDto), { password: createTeacherDto.email }));
    }
    async update(teacherId, updateTeacherDto) {
        return await this.teacherModel.update(teacherId, updateTeacherDto).exec();
    }
    async delete(teacherId) {
        return await this.teacherModel.findByIdAndDelete(teacherId).exec();
    }
    async findByDepartmentId(departmentId) {
        return await this.teacherModel.find({ department: departmentId }).exec();
    }
};
TeachersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Teacher')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TeachersService);
exports.TeachersService = TeachersService;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const DepartmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
});
exports.default = DepartmentSchema;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const sectors_controller_1 = __webpack_require__(43);
const sectors_service_1 = __webpack_require__(39);
const mongoose_1 = __webpack_require__(4);
const sector_schema_1 = __webpack_require__(46);
const students_module_1 = __webpack_require__(19);
let SectorsModule = class SectorsModule {
};
SectorsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Sector', schema: sector_schema_1.default }]),
            students_module_1.StudentsModule,
        ],
        controllers: [sectors_controller_1.SectorsController],
        providers: [sectors_service_1.SectorsService],
        exports: [sectors_service_1.SectorsService],
    })
], SectorsModule);
exports.SectorsModule = SectorsModule;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const sectors_service_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(16);
const create_sector_dto_1 = __webpack_require__(44);
const update_sector_dto_1 = __webpack_require__(45);
const passport_1 = __webpack_require__(10);
const students_service_1 = __webpack_require__(8);
let SectorsController = class SectorsController {
    constructor(sectorsService, studentsService) {
        this.sectorsService = sectorsService;
        this.studentsService = studentsService;
    }
    async find() {
        return await this.sectorsService.find();
    }
    async findById(sectorId) {
        return await this.sectorsService.findById(sectorId);
    }
    async create(createSectorDto) {
        return await this.sectorsService.create(createSectorDto);
    }
    async update(sectorId, updateSectorDto) {
        return await this.sectorsService.update(sectorId, updateSectorDto);
    }
    async delete(sectorId) {
        return await this.sectorsService.delete(sectorId);
    }
    async findStudentBySectorId(sectorId) {
        return await this.studentsService.findBySectorId(sectorId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "find", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sector_dto_1.CreateSectorDto]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sector_dto_1.UpdateSectorDto]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id/students'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "findStudentBySectorId", null);
SectorsController = __decorate([
    common_1.Controller('sectors'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiUseTags('sectors'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [sectors_service_1.SectorsService,
        students_service_1.StudentsService])
], SectorsController);
exports.SectorsController = SectorsController;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class CreateSectorDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateSectorDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateSectorDto.prototype, "department", void 0);
exports.CreateSectorDto = CreateSectorDto;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class UpdateSectorDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateSectorDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateSectorDto.prototype, "department", void 0);
exports.UpdateSectorDto = UpdateSectorDto;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const SectorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    department: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Department',
    },
});
exports.default = SectorSchema;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const teacher_schema_1 = __webpack_require__(48);
const teachers_service_1 = __webpack_require__(40);
const teachers_controller_1 = __webpack_require__(49);
const thesis_module_1 = __webpack_require__(26);
let TeachersModule = class TeachersModule {
};
TeachersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Teacher', schema: teacher_schema_1.default }]),
            thesis_module_1.ThesisModule,
        ],
        providers: [teachers_service_1.TeachersService],
        controllers: [teachers_controller_1.TeachersController],
        exports: [teachers_service_1.TeachersService],
    })
], TeachersModule);
exports.TeachersModule = TeachersModule;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const bcrypt_1 = __webpack_require__(21);
const TeacherSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
    },
    department: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Department',
    },
});
TeacherSchema.pre('save', async function (next) {
    const salt = await bcrypt_1.genSalt(10);
    this.password = await bcrypt_1.hash(this.password, salt);
    next();
});
TeacherSchema.method('isValidPassword', async function (plainText) {
    return bcrypt_1.compare(plainText, this.password);
});
exports.default = TeacherSchema;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(16);
const teachers_service_1 = __webpack_require__(40);
const create_teacher_dto_1 = __webpack_require__(50);
const passport_1 = __webpack_require__(10);
const update_teacher_dto_1 = __webpack_require__(51);
const thesis_service_1 = __webpack_require__(25);
let TeachersController = class TeachersController {
    constructor(teacherService, thesisService) {
        this.teacherService = teacherService;
        this.thesisService = thesisService;
    }
    async find() {
        return await this.teacherService.find();
    }
    async findById(teacherId) {
        return await this.teacherService.findById(teacherId);
    }
    async create(createTeacherDto) {
        return await this.teacherService.create(createTeacherDto);
    }
    async update(teacherId, updateTeacherDto) {
        return await this.teacherService.update(teacherId, updateTeacherDto);
    }
    async delete(teacherId) {
        return await this.teacherService.delete(teacherId);
    }
    async findThesisByTeacherId(teacherId) {
        return await this.thesisService.findByTeacherId(teacherId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "find", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "delete", null);
__decorate([
    common_1.Get(':id/thesis'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "findThesisByTeacherId", null);
TeachersController = __decorate([
    common_1.Controller('teachers'),
    swagger_1.ApiUseTags('teachers'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [teachers_service_1.TeachersService,
        thesis_service_1.ThesisService])
], TeachersController);
exports.TeachersController = TeachersController;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class CreateTeacherDto {
}
__decorate([
    class_validator_1.IsEmail(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsMobilePhone('vi-VN'),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "phoneNumber", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "department", void 0);
exports.CreateTeacherDto = CreateTeacherDto;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class UpdateTeacherDto {
}
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsMobilePhone('vi-VN'),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "phoneNumber", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "department", void 0);
exports.UpdateTeacherDto = UpdateTeacherDto;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const subjects_controller_1 = __webpack_require__(53);
const subjects_service_1 = __webpack_require__(54);
const mongoose_1 = __webpack_require__(4);
const subject_schema_1 = __webpack_require__(57);
const thesis_module_1 = __webpack_require__(26);
let SubjectsModule = class SubjectsModule {
};
SubjectsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Subject', schema: subject_schema_1.default }]),
            thesis_module_1.ThesisModule,
        ],
        controllers: [subjects_controller_1.SubjectsController],
        providers: [subjects_service_1.SubjectsService],
        exports: [subjects_service_1.SubjectsService],
    })
], SubjectsModule);
exports.SubjectsModule = SubjectsModule;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const subjects_service_1 = __webpack_require__(54);
const swagger_1 = __webpack_require__(16);
const create_subject_dto_1 = __webpack_require__(55);
const update_subject_dto_1 = __webpack_require__(56);
const passport_1 = __webpack_require__(10);
const thesis_service_1 = __webpack_require__(25);
let SubjectsController = class SubjectsController {
    constructor(subjectsService, thesisService) {
        this.subjectsService = subjectsService;
        this.thesisService = thesisService;
    }
    async find() {
        return await this.subjectsService.find();
    }
    async findById(subjectId) {
        return await this.subjectsService.findById(subjectId);
    }
    async create(createSubjectDto) {
        return await this.subjectsService.create(createSubjectDto);
    }
    async update(subjectId, updateSubjectDto) {
        return await this.subjectsService.update(subjectId, updateSubjectDto);
    }
    async delete(subjectId) {
        return await this.subjectsService.delete(subjectId);
    }
    async findThesisBySubjectId(subjectId) {
        return await this.thesisService.findBySubjectId(subjectId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "find", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id/thesis'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectsController.prototype, "findThesisBySubjectId", null);
SubjectsController = __decorate([
    common_1.Controller('subjects'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiUseTags('subjects'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [subjects_service_1.SubjectsService,
        thesis_service_1.ThesisService])
], SubjectsController);
exports.SubjectsController = SubjectsController;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let SubjectsService = class SubjectsService {
    constructor(subjectModel) {
        this.subjectModel = subjectModel;
    }
    async find() {
        return await this.subjectModel.find().exec();
    }
    async findById(subjectId) {
        return await this.subjectModel.findById(subjectId).exec();
    }
    async findByDepartmentId(departmentId) {
        return await this.subjectModel.find({ department: departmentId }).exec();
    }
    async create(createSubjectDto) {
        return await this.subjectModel.create(createSubjectDto);
    }
    async update(subjectId, updateSubjectDto) {
        return await this.subjectModel
            .findByIdAndUpdate(subjectId, updateSubjectDto)
            .exec();
    }
    async delete(subjectId) {
        return await this.subjectModel.findByIdAndDelete(subjectId).exec();
    }
};
SubjectsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Subject')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubjectsService);
exports.SubjectsService = SubjectsService;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class CreateSubjectDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateSubjectDto.prototype, "name", void 0);
exports.CreateSubjectDto = CreateSubjectDto;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(16);
class UpdateSubjectDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateSubjectDto.prototype, "name", void 0);
exports.UpdateSubjectDto = UpdateSubjectDto;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(9);
const SubjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
});
exports.default = SubjectSchema;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ })
/******/ ]);