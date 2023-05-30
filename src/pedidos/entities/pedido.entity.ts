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
  pedido_id: Number;

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

  @Prop({
    type: String,
    required: true
  })
  direccion: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now
  })
  fecha: Date;

  @Prop({
    type: String,
    required: true
  })
  metodoPago: string;
}
export const PedidoSchema = SchemaFactory.createForClass(Pedido);
