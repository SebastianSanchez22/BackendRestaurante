import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateClienteDto {

    //@ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    //@ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly telefono: number;

}

