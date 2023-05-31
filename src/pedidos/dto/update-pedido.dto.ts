import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Comida } from 'src/comidas/entities/comida.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsNotEmpty()
    readonly comidas?: Array<Comida>;

    @IsNotEmpty()
    readonly cliente?: Cliente;

    @IsString()
    @IsNotEmpty()
    readonly direccion?: string;

    @IsString()
    @IsNotEmpty()
    readonly metodoPago?: string;
}
