import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioservice: UsuarioService) {}
    @Post()
    async SimpleLogin(@Body() body: {Username:string})
    {
        const {Username} = body;
        return await this.usuarioservice.SimpleLogin(Username);
    }
}
