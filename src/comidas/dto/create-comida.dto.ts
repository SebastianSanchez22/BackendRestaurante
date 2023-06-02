import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComidaDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @IsString()
    @IsNotEmpty()
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    readonly price: string;

    @IsNumber()
    @IsNotEmpty()
    readonly value: number;

}
