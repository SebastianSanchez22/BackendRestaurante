import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateClienteDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsNumber()
    @IsNotEmpty()
    readonly telefono: number;

}

