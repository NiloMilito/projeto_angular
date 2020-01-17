import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { PacienteResolve } from './service/paciente.resolve';
import { ListarComponent } from './components/listar/listar.component';



const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      paciente: PacienteResolve,
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      paciente: PacienteResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
