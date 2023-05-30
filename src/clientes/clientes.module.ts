import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, ClienteSchema } from './entities/cliente.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cliente.schema_name,
        schema: ClienteSchema
      }
    ])],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
