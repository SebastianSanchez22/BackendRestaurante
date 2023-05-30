import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ComidasModule } from './comidas/comidas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosModule } from './pedidos/pedidos.module';
import { environVariables } from 'environVariables';

@Module({
  imports: [ClientesModule, ComidasModule, PedidosModule,
     MongooseModule.forRoot(environVariables.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
