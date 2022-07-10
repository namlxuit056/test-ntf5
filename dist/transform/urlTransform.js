"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlTransform = void 0;
const class_transformer_1 = require("class-transformer");
const UrlTransform = () => {
    return (0, class_transformer_1.Transform)((tr) => {
        if (!tr)
            return '';
        const url = tr.value.replace('watch?v=', 'embed/');
        return url;
    });
};
exports.UrlTransform = UrlTransform;
//# sourceMappingURL=urlTransform.js.map