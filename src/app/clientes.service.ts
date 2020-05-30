import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  getClientes(): string[] {
    return[
      'Maria',
      'Luis',
      'Natalia',
      'Sofia',
      'Raúl',
      'Javier'
    ];
  }

 
}
