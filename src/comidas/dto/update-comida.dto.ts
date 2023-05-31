import { PartialType } from '@nestjs/mapped-types';
import { CreateComidaDto } from './create-comida.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateComidaDto extends PartialType(CreateComidaDto) {

    @IsString()
    @IsNotEmpty()
    readonly nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    readonly valor?: number;

    @IsString()
    @IsNotEmpty()
    readonly filtro?: string;

}
