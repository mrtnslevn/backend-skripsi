import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';

@Controller('univ')
export class UnivController {
  @Get(':limit')
  async getData(@Param('limit') limit: string): Promise<any> {
    const resUnivHipolabs = await axios.get(
      `http://universities.hipolabs.com/search?limit=${limit}`,
    );

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

      const paragraphLength = Math.floor(
        Math.random() * (maxWord - minWord + 1) + minWord,
      );
      let paragrapgh = '';
      for (let p = 0; p < paragraphLength; p++) {
        const randomIdx = Math.floor(Math.random() * words.length);
        const word = words[randomIdx];
        paragrapgh += word + ' ';
      }
      paragrapgh = paragrapgh.trim();

      //random data untuk chartjs
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
}
