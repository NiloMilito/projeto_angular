import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';
import { UsuarioResolve } from './service/usuario.resolve';

const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      medico: UsuarioResolve,
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      medico: UsuarioResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
