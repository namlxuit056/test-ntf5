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
exports.MovieController = void 0;
const movie_dto_1 = require("./../dto/movie.dto");
const currentUser_decorator_1 = require("./../decorator/currentUser.decorator");
const jwt_auth_guard_1 = require("./../auth/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const movie_service_1 = require("./movie.service");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    share(movie, currentUser) {
        return this.movieService.share(movie, currentUser);
    }
    getMany(params) {
        return this.movieService.getMany({ take: params.take, skip: params.skip });
    }
};
__decorate([
    (0, common_1.Post)('/share'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Share movie' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Create movie success' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error ' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request Response' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_dto_1.ShareMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "share", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get movies' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Get movies success' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error ' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request Response' }),
    (0, common_1.CacheKey)('share-movie'),
    (0, common_1.CacheTTL)(20),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_dto_1.GetManyMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getMany", null);
MovieController = __decorate([
    (0, common_1.Controller)('movies'),
    (0, swagger_1.ApiTags)('movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map