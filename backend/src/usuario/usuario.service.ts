import { Injectable, NotFoundException } from '@nestjs/common';
import { usuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {

    async SimpleLogin(Username: string): Promise<any> 
    {
      if (!Username) 
      {
        throw new NotFoundException({ message: 'Se necesita un nombre de usuario' });
      }
      
      if(Username == 'MGR.Lujan')
      {
        return { Username: Username, control: 1 };
      }
      else
      {
        return { Username: Username, control: 0 };
      }
    }
}
