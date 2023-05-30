import { Module } from '@nestjs/common';
import { ComidasService } from './comidas.service';
import { ComidasController } from './comidas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comida, ComidaSchema } from './entities/comida.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comida.schema_name,
        schema: ComidaSchema
      }
    ])],
  controllers: [ComidasController],
  providers: [ComidasService]
})
export class ComidasModule {}
