import { Module } from '@nestjs/common';
import { UnivController } from './universities.controller';

@Module({
  imports: [],
  controllers: [UnivController],
  providers: [],
})
export class universitiesModule {}
