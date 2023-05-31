import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @IsString()
    @IsNotEmpty()
    readonly nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly telefono?: number;
}
