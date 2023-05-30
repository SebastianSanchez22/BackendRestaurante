import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto) : Promise<Pedido> {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  async findAll() : Promise<Pedido[]> {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pedido> {
    return this.pedidosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto): Promise<Pedido>{
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.pedidosService.remove(+id);
  }
}
