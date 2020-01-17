import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [     
  {
    path: 'medicos',
    loadChildren: () => import('./medico/medico.module')
      .then(mod => mod.MedicoModule),
  },
  { path: 'pacientes',
  // children: [
  //   {component, path, children: []}
  // ],
  loadChildren: () => import('./paciente/paciente.module')
    .then(mod => mod.PacienteModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module')
      .then(mod => mod.UsuarioModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
