import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Comida } from 'src/comidas/entities/comida.entity';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {

public static schema_name: string = 'Pedido';

  @Prop({
    type: Array<Comida>,
    required: true
  })
  comidas: Array<Comida>;

  @Prop({
    type: Cliente,
    required: true
  })
  cliente: Cliente;

  @Prop({
    type: Number,
    required: true
  })
  valorTotal: Number;
  
}
export const PedidoSchema = SchemaFactory.createForClass(Pedido);
