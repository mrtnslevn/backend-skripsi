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
exports.mixinJsonController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let mixinJsonController = class mixinJsonController {
    async getData(limit) {
        const resPokeData = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
        const pokeData = resPokeData.data;
        const pokeResult = pokeData.results;
        const pokeResults = [];
        for (const result of pokeResult) {
            const splitUrl = result.url.split('/');
            const pokeId = splitUrl[splitUrl.length - 2];
            const pokeImageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
            const min = 1;
            const max = 100;
            const count = 10;
            const randomNumbers = [];
            const chartReds = [];
            for (let i = 0; i < count; i++) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
                randomNumbers.push(randomNumber);
            }
            for (let j = 0; j < count; j++) {
                const chartRed = Math.floor(Math.random() * (max - min + 2) + min);
                chartReds.push(chartRed);
            }
            const words = [
                'Lorem',
                'ipsum',
                'dolor',
                'sit',
                'amet',
                'consectetur',
                'adipiscing',
                'elit',
                'sed',
                'do',
                'eiusmod',
                'tempor',
                'incididunt',
                'ut',
                'labore',
                'et',
                'dolore',
                'magna',
                'aliqua',
                'Ut',
                'enim',
                'ad',
                'minim',
                'veniam',
                'quis',
                'nostrud',
                'exercitation',
                'ullamco',
                'laboris',
                'nisi',
                'ut',
                'aliquip',
                'ex',
                'ea',
                'commodo',
                'consequat',
                'Duis',
                'aute',
                'irure',
                'dolor',
                'in',
                'reprehenderit',
                'in',
                'voluptate',
                'velit',
                'esse',
                'cillum',
                'dolore',
                'eu',
                'fugiat',
                'nulla',
                'pariatur',
                'Excepteur',
                'sint',
                'occaecat',
                'cupidatat',
                'non',
                'proident',
                'sunt',
                'in',
                'culpa',
                'qui',
                'officia',
                'deserunt',
                'mollit',
                'anim',
                'id',
                'est',
                'laborum',
            ];
            const minWord = 50;
            const maxWord = 60;
            const paragraphLength = Math.floor(Math.random() * (maxWord - minWord + 1) + minWord);
            let paragrapgh = '';
            for (let p = 0; p < paragraphLength; p++) {
                const randomIdx = Math.floor(Math.random() * words.length);
                const word = words[randomIdx];
                paragrapgh += word + ' ';
            }
            paragrapgh = paragrapgh.trim();
            const mixinData = {
                pokeId: pokeId,
                pokeName: result.name,
                pokeUrl: result.url,
                pokeImageLink: pokeImageLink,
                paragraph: paragrapgh,
                chartBlue: randomNumbers,
                chartReds: chartReds,
            };
            pokeResults.push(mixinData);
        }
        const JsonResult = {
            results: pokeResults,
            length: pokeResults.length,
        };
        return JsonResult;
    }
};
__decorate([
    (0, common_1.Get)(':limit'),
    __param(0, (0, common_1.Param)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], mixinJsonController.prototype, "getData", null);
mixinJsonController = __decorate([
    (0, common_1.Controller)('univ')
], mixinJsonController);
exports.mixinJsonController = mixinJsonController;
//# sourceMappingURL=mixin-json.controller.js.map