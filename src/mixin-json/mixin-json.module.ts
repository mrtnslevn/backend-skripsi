import { Module } from '@nestjs/common';
import { mixinJsonController } from './mixin-json.controller';

@Module({
  imports: [],
  controllers: [mixinJsonController],
  providers: [],
})
export class mixinJsonModule {}
