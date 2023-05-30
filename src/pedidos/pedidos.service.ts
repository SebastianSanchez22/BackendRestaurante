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

  async findOne(id: number) {
    return await this.pedidoModel.findOne({pedido_id: id}).exec();
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    await this.pedidoModel.updateOne({pedido_id: id}, updatePedidoDto).exec();
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.pedidoModel.deleteOne({pedido_id: id}).exec();
  }
}
