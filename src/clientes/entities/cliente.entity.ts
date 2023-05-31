import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema()
export class Cliente {

public static schema_name: string = 'Cliente';

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  nombre: string;

  @Prop({
    type: Number,
    required: true
  })
  telefono: number;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
