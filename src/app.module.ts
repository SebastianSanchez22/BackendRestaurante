import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ComidasModule } from './comidas/comidas.module';

@Module({
  imports: [ClientesModule, ComidasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
