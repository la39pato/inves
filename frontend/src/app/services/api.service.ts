
import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private axiosInstance: AxiosInstance;
  private baseUrl = 'http://localhost:3000';

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    });
    console.log(this.axiosInstance.defaults);
  }

  /*
    Método genérico para manejar peticiones POST
  */
  private async postRequest(endpoint: string, data: any): Promise<any[]> {
    try {
      const response = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Error al hacer POST a ${endpoint}:`, error);
      throw error;
    }
  }

  /*--------------USUARIOS---------------- */
  /*
    Obtener todos los usuarios desde el backend
   */
  async getUsuarios(usuario: any): Promise<any[]> {
    return this.postRequest('/usuario', usuario);
  }

  async getUsuariosPendientes(): Promise<any[]> {
    try {
      const response = await this.axiosInstance.get('/usuario/usuarios-pendiente');
      console.log('Respuesta completa del servidor:', response.data);

      if (response.data && Array.isArray(response.data.data)) {
        return response.data.data; // Devuelve el array de eventos en la propiedad 'data'
      } else {
        console.warn('La respuesta no contiene un array de usuarios pendientes');
        return [];
      }
    } catch (error) {
      console.error('Error al obtener usuarios pendites:', error);
      throw error;
    }
  }
}
