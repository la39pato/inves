import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable(); // Suscribirse al usuario actual

  private apiUrl = 'http://localhost:3000/usuario'; // Tu API base

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(usuario: { nombre: string, contrasena: string, tipousuario: string }): Observable<any> {
    return this.http.post('http://localhost:3000/usuario/login',usuario);
  }
  
  // Método para registrar un nuevo usuario
  registrarusuario(usuario: { nombre: string; contrasena: string; email: string; numcontacto: number; tipousuario: string }): Observable<any> 
  {
    return this.http.post('http://localhost:3000/usuario',usuario);
  }
}
