import { Injectable, NotFoundException } from '@nestjs/common';
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
    const findAllClientes = await this.clienteModel.find().exec();
    if(!findAllClientes) throw new NotFoundException('No hay clientes registrados')
    return findAllClientes;
  }

  async findOne(nombre: string) {
    const findCliente = await this.clienteModel.findOne({nombre: nombre}).exec()
    if(!findCliente) throw new NotFoundException(`Cliente con nombre:${nombre} no encontrado`)
    return findCliente;
  }

  async update(nombre: string, updateClienteDto: UpdateClienteDto) {
    const updateCliente = await this.clienteModel.updateOne({nombre: nombre}, updateClienteDto).exec();
    if(!updateCliente) throw new NotFoundException(`Cliente con nombre:${nombre} no encontrado`)
    return this.findOne(updateClienteDto.nombre);
  }

  async remove(nombre: string) {
    const removeCliente = await this.clienteModel.deleteOne({nombre: nombre}).exec();
    if(!removeCliente) throw new NotFoundException(`Cliente con nombre:${nombre} no encontrado`)
    return removeCliente;
  }
}


