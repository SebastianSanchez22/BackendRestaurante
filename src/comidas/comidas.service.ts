import { Injectable } from '@nestjs/common';
import { CreateComidaDto } from './dto/create-comida.dto';
import { UpdateComidaDto } from './dto/update-comida.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comida } from './entities/comida.entity';

@Injectable()
export class ComidasService {

  constructor(@InjectModel('Comida') private readonly comidaModel: Model<Comida>) {}

  async create(createComidaDto: CreateComidaDto) {
    const newComida = new this.comidaModel(createComidaDto);
    return await newComida.save();
  }

  async findAll() {
    return await this.comidaModel.find().exec();
  }

  async findOne(id: number) {
    return await this.comidaModel.findOne({comida_id: id}).exec();
  }

  async update(id: number, updateComidaDto: UpdateComidaDto) {
    await this.comidaModel.updateOne({comida_id: id}, updateComidaDto).exec();
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.comidaModel.deleteOne({comida_id: id}).exec();
  }
}
