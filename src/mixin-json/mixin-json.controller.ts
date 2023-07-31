import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';
//import { pokeData, pokeJson } from './interface/pokeData.interface';

@Controller('univ')
export class mixinJsonController {
  @Get(':limit')
  async getData(@Param('limit') limit: string): Promise<any> {
    const resPokeData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
    );
    const pokeData = resPokeData.data;
    const pokeResult = pokeData.results;
    // const pokeUrl = pokeData.results[0].url;
    // const pokeName = pokeData.results[0].name;
    const pokeResults = [];

    for (const result of pokeResult) {
      const splitUrl = result.url.split('/');
      const pokeId = splitUrl[splitUrl.length - 2];
      // const resPokeImage = await axios.get(
      //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
      // );
      const pokeImageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

      // const mixinData = {
      //   // PokeId: pokeId,
      //   pokeId: pokeId,
      //   Pokedata: pokeData,
      //   pokeImageLink: pokeImageLink,
      //   PokeImage: resPokeImage.data,
      // };

      //data random untuk grafik dan teks

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
}
