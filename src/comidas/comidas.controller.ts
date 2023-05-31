import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComidasService } from './comidas.service';
import { CreateComidaDto } from './dto/create-comida.dto';
import { UpdateComidaDto } from './dto/update-comida.dto';
import { Comida } from './entities/comida.entity';

@Controller('comidas')
export class ComidasController {
  constructor(private readonly comidasService: ComidasService) {}

  @Post()
  async create(@Body() createComidaDto: CreateComidaDto) : Promise<Comida> {
    return this.comidasService.create(createComidaDto);
  }

  @Get()
  async findAll() : Promise<Comida[]> {
    return this.comidasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Comida> {
    return this.comidasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateComidaDto: UpdateComidaDto): Promise<Comida>{
    return this.comidasService.update(id, updateComidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.comidasService.remove(id);
  }
}
