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
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  category: string;

  @Prop({
    type: String,
    required: true,
  })
  image: string;

  @Prop({
    type: String,
    required: true,
  })
  price: string;

  @Prop({
    type: Number,
    required: true
  })
  value: number;

}

export const ComidaSchema = SchemaFactory.createForClass(Comida);
