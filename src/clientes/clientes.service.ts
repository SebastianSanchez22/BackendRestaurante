import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientesService {
  
  constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>) {}

  async create(createClienteDto: CreateClienteDto) {
    const newCliente = new this.clienteModel(createClienteDto);
    return await newCliente.save();
  }

  async findAll() {
    return await this.clienteModel.find().exec();
  }

  async findOne(id: number) {
    return await this.clienteModel.findOne({cliente_id: id}).exec();
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.clienteModel.updateOne({cliente_id: id}, updateClienteDto).exec();
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.clienteModel.deleteOne({cliente_id: id}).exec();
  }
}
