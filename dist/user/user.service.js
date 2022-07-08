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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const errMessage_1 = require("../message/errMessage");
const user_dto_1 = require("../dto/user.dto");
const share_service_1 = require("../share/share.service");
let UserService = class UserService {
    constructor(prismaService, shareService) {
        this.prismaService = prismaService;
        this.shareService = shareService;
    }
    async create(user) {
        const userExist = await this.prismaService.user.findUnique({
            where: { email: user.email },
        });
        if (userExist)
            throw new common_1.HttpException(errMessage_1.errMessage.auth.exist, common_1.HttpStatus.BAD_REQUEST);
        const password = await this.shareService.hashPassword(user.password);
        const created = await this.prismaService.user.create({
            data: {
                email: user.email,
                password,
            },
        });
        delete created.password;
        return created;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        share_service_1.ShareService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map