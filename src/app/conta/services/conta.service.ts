import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUsuario, Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private httpClient: HttpClient) { }

  registrar(usuario: Usuario) {

  }
}
