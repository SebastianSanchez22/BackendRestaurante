import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema()
export class Cliente {

public static schema_name: string = 'Cliente';

  @Prop({
    index: {unique:true},
    type: Number,
    required: true
  })
  cliente_id: number;

  @Prop({
    type: String,
    required: true
  })
  nombre: string;

  @Prop({
    type: Number,
    required: true
  })
  telefono: number;

  @Prop({
    type: String,
    required: true
  })
  filtro: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
