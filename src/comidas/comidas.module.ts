import { Module } from '@nestjs/common';
import { ComidasService } from './comidas.service';
import { ComidasController } from './comidas.controller';

@Module({
  controllers: [ComidasController],
  providers: [ComidasService]
})
export class ComidasModule {}
