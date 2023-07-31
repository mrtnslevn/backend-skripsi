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
exports.UnivController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let UnivController = class UnivController {
    async getData(limit) {
        const resUnivHipolabs = await axios_1.default.get(`http://universities.hipolabs.com/search?limit=${limit}`);
        const UnivData = resUnivHipolabs.data;
        const UnivJson = [];
        for (const univ of UnivData) {
            const url = univ.domains[0];
            const imgWeb = univ.web_pages[0].split(',/');
            const imageLink = `https://logo.clearbit.com/${imgWeb}?size=200&format=png`;
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
            const maxWord = 50;
            const paragraphLength = Math.floor(Math.random() * (maxWord - minWord + 1) + minWord);
            let paragrapgh = '';
            for (let p = 0; p < paragraphLength; p++) {
                const randomIdx = Math.floor(Math.random() * words.length);
                const word = words[randomIdx];
                paragrapgh += word + ' ';
            }
            paragrapgh = paragrapgh.trim();
            const min = 10;
            const max = 100;
            const count = 5;
            const randomNumbers = [];
            for (let i = 0; i < count; i++) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
                randomNumbers.push(randomNumber);
            }
            const UpdatedUnivData = {
                alpha_two_code: univ.alpha_two_code,
                state_province: univ.state_province,
                web_pages: univ.web_pages,
                domains: univ.domains,
                country: univ.country,
                name: univ.name,
                imgUrl: imageLink,
                paragrapgh: paragrapgh,
                chartData: randomNumbers,
            };
            UnivJson.push(UpdatedUnivData);
        }
        return UnivJson;
    }
};
__decorate([
    (0, common_1.Get)(':limit'),
    __param(0, (0, common_1.Param)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnivController.prototype, "getData", null);
UnivController = __decorate([
    (0, common_1.Controller)('univ')
], UnivController);
exports.UnivController = UnivController;
//# sourceMappingURL=universities.controller.js.map