import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Paciente } from '../model/paciente';
import { Injectable } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class PacienteResolve implements Resolve<Paciente> {

    constructor(private pacienteService: PacienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> | Paciente {
        const id = route.paramMap.get('id');
        if (id) {
        return this.pacienteService.consultar(id);
        }
        return new Paciente();
    }
    
}
