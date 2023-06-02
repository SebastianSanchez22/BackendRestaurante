import { PartialType } from '@nestjs/mapped-types';
import { CreateComidaDto } from './create-comida.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateComidaDto extends PartialType(CreateComidaDto) {

    @IsString()
    @IsNotEmpty()
    readonly name?: string;

    @IsString()
    @IsNotEmpty()
    readonly category?: string;

    @IsString()
    @IsNotEmpty()
    readonly image?: string;

    @IsString()
    @IsNotEmpty()
    readonly price?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly value?: number;
}
