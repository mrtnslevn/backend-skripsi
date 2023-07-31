import { PartialType } from '@nestjs/mapped-types';
import { mixinJsonDto } from './mixin-json.dto';

export class updateMixinDto extends PartialType(mixinJsonDto) {}
