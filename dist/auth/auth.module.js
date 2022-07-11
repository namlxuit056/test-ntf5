"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const share_service_1 = require("./../share/share.service");
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = AuthModule_1 = class AuthModule {
};
AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                secret: process.env.SECRET,
                signOptions: { expiresIn: process.env.TIME_EXPIRE_TOKEN },
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            jwt_auth_guard_1.JwtAuthGuard,
            user_service_1.UserService,
            prisma_service_1.PrismaService,
            share_service_1.ShareService,
            jwt_strategy_1.JwtStrategy,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [AuthModule_1],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map