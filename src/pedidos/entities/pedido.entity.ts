import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Comida } from 'src/comidas/entities/comida.entity';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {

public static schema_name: string = 'Pedido';

  @Prop({
    index: {unique:true},
    type: Number,
    required: true
  })
  pedido_id: number;

  @Prop({
    type: Array<Comida>,
    required: true
  })
  comidas: Array<Comida>;

  @Prop({
    type: Number,
    required: true
  })
  cliente: Number;
}
export const PedidoSchema = SchemaFactory.createForClass(Pedido);
