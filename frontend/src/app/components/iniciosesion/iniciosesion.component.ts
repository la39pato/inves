import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router  } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para [(ngModel)]
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [ CommonModule,FormsModule,RouterModule ],
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  nombre:string = '';
  contrasena:string = '';
  mensajeError = '';
  passwordVisible: boolean = false; 


 constructor(private authService: AuthService,private router: Router) {}
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  iniciarSesion() {
    const usuario = {
      nombre: this.nombre,
      contrasena: this.contrasena
    };
  }
}