import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComidaDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsNumber()
    @IsNotEmpty()
    readonly valor: number;

    @IsString()
    @IsNotEmpty()
    readonly filtro: string;

}
