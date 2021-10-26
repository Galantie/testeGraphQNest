import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityResolver } from './city.resolver';

@Module({
  controllers: [CityController],
  providers: [CityResolver]
})
export class CityModule {}
