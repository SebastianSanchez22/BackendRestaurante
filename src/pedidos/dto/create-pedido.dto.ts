import { IsNotEmpty, IsString, IsNumber} from 'class-validator';
import { Comida } from 'src/comidas/entities/comida.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

export class CreatePedidoDto {

    @IsNotEmpty()
    readonly comidas: Array<Comida>;

    @IsNotEmpty()
    readonly cliente: Cliente;

    @IsString()
    @IsNotEmpty()
    readonly direccion: string;

    @IsNumber()
    @IsNotEmpty()
    readonly valorTotal: Number;
}
