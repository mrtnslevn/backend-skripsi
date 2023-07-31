"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixinJsonModule = void 0;
const common_1 = require("@nestjs/common");
const mixin_json_controller_1 = require("./mixin-json.controller");
let mixinJsonModule = class mixinJsonModule {
};
mixinJsonModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [mixin_json_controller_1.mixinJsonController],
        providers: [],
    })
], mixinJsonModule);
exports.mixinJsonModule = mixinJsonModule;
//# sourceMappingURL=mixin-json.module.js.map