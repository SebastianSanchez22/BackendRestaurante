import { Injectable } from '@nestjs/common';
import { CreateComidaDto } from './dto/create-comida.dto';
import { UpdateComidaDto } from './dto/update-comida.dto';

@Injectable()
export class ComidasService {
  create(createComidaDto: CreateComidaDto) {
    return 'This action adds a new comida';
  }

  findAll() {
    return `This action returns all comidas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comida`;
  }

  update(id: number, updateComidaDto: UpdateComidaDto) {
    return `This action updates a #${id} comida`;
  }

  remove(id: number) {
    return `This action removes a #${id} comida`;
  }
}
