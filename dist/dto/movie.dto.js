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
exports.GetManyMovieDto = exports.ShareMovieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const urlTransform_1 = require("../transform/urlTransform");
class ShareMovieDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '',
        required: true,
    }),
    (0, urlTransform_1.UrlTransform)(),
    (0, class_validator_1.IsUrl)(undefined, { message: 'URL is not valid.' }),
    __metadata("design:type", String)
], ShareMovieDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '',
        required: false,
    }),
    __metadata("design:type", String)
], ShareMovieDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '',
        required: false,
    }),
    __metadata("design:type", String)
], ShareMovieDto.prototype, "desc", void 0);
exports.ShareMovieDto = ShareMovieDto;
class GetManyMovieDto {
    constructor() {
        this.take = 10;
        this.skip = 0;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 10,
        required: false,
    }),
    (0, class_transformer_1.Transform)((take) => Number(take)),
    __metadata("design:type", Object)
], GetManyMovieDto.prototype, "take", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        required: false,
    }),
    (0, class_transformer_1.Transform)((skip) => Number(skip)),
    __metadata("design:type", Number)
], GetManyMovieDto.prototype, "skip", void 0);
exports.GetManyMovieDto = GetManyMovieDto;
//# sourceMappingURL=movie.dto.js.map