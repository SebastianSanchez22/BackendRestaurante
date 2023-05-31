import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComidaDocument = HydratedDocument<Comida>;

@Schema()
export class Comida {

public static schema_name: string = 'Comida';

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
  valor: number;

  @Prop({
    type: String,
    required: true
  })
  filtro: string;
}

export const ComidaSchema = SchemaFactory.createForClass(Comida);
