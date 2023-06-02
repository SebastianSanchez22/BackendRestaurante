import { IsNotEmpty, IsNumber} from 'class-validator';
import { CreateClienteDto } from 'src/clientes/dto/create-cliente.dto';;
import { InterfazComidaDto } from 'src/comidas/dto/interfazComida.dto';

export class CreatePedidoDto {

    @IsNotEmpty()
    readonly comidas: Array<InterfazComidaDto>;

    @IsNotEmpty()
    readonly cliente: CreateClienteDto;
    // Cliente trae nombre y telefono

    @IsNumber()
    @IsNotEmpty()
    readonly valorTotal: Number;
}
