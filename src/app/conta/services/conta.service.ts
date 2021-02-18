import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { IUsuario, Usuario } from '../models/usuario';
import { BaseService } from 'src/app/@shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
   }
  // requisição para cadastrar um usuario
  // modificar os parametros de acordo com a API
  registrar(usuario: Usuario) {
    const response = this.httpClient
      .post(`${this.UrlServiceV1}/nova-conta`, usuario, this.getJsonHeaders())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));
    return response;
  }
}
