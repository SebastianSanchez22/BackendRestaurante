import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pedido, PedidoSchema } from './entities/pedido.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pedido.schema_name,
        schema: PedidoSchema
      }
    ])],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
