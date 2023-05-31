import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PedidosService {
  constructor(@InjectModel('Pedido') private readonly pedidoModel: Model<Pedido>) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const newPedido = new this.pedidoModel(createPedidoDto);
    return await newPedido.save();
  }

  async findAll() {
    return await this.pedidoModel.find().exec();
  }

  async findOne(id: string) {
    return await this.pedidoModel.findOne({id: id}).exec();
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    await this.pedidoModel.updateOne({id: id}, updatePedidoDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.pedidoModel.deleteOne({id: id}).exec();
  }
}
