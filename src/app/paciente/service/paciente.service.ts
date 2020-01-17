import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/base-api.service';
import { Paciente } from '../model/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApiService<Paciente>{

  constructor(httpClient: HttpClient) {
    super(httpClient, 'pacientes');
  }
  
}
