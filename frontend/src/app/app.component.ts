import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    IniciosesionComponent,
    CommonModule,  
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  eventos: any[] = [];
  user: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log(this.loadEventos());
  }

  async loadEventos() {
    try {
      this.eventos = await this.apiService.getUsuariosPendientes();
      console.log(this.eventos)
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }
}

