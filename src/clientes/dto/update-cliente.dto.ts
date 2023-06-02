import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly nombre?: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly telefono?: number;
}
