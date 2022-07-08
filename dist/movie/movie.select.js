"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovieSelect = void 0;
exports.GetMovieSelect = {
    id: true,
    url: true,
    title: true,
    desc: true,
    createdAt: true,
    updatedAt: true,
    author: {
        select: {
            id: true,
            email: true,
        },
    },
};
//# sourceMappingURL=movie.select.js.map