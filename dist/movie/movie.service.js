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
exports.MovieService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const movie_select_1 = require("./movie.select");
const common_1 = require("@nestjs/common");
let MovieService = class MovieService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async share(movie, user) {
        const created = await this.prismaService.movie.create({
            data: {
                url: movie.url,
                title: movie.title,
                desc: movie.desc,
                authorId: user.id,
            },
            select: movie_select_1.GetMovieSelect,
        });
        return created;
    }
    async getMany({ take, skip }) {
        const movies = await this.prismaService.movie.findMany({
            take,
            skip,
            select: movie_select_1.GetMovieSelect,
            orderBy: { updatedAt: 'desc' },
        });
        const count = await this.prismaService.movie.count();
        return { data: movies, count };
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map