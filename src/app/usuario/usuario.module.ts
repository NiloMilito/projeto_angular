import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './components/editar/editar.component';
import { ListarComponent } from './components/listar/listar.component';
import { DemoMaterialModule } from '../material-module';
import { MatNativeDateModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    ListarComponent, 
    EditarComponent,
    NgContentComponetComponent
  ],
  imports: [  
    ReactiveFormsModule,  
    FormsModule,    
    RouterModule,
    UsuarioRoutingModule,
    SharedModule,
    MatNativeDateModule,
    DemoMaterialModule,  
    CommonModule 
  ],
  entryComponents: [ NgContentComponetComponent],
  bootstrap: [ NgContentComponetComponent],
  providers: []
})
export class UsuarioModule { }
