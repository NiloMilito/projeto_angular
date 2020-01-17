import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { SharedModule } from '../shared/shared.module';
import { MedicoRoutingModule } from './medico-routing.module';
import { DiretivaExemploComponent } from './components/diretiva-exemplo/diretiva-exemplo.component';
import { PipeExemploComponent } from './components/pipe-exemplo/pipe-exemplo.component';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from '../material-module';

@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    DiretivaExemploComponent,
    PipeExemploComponent,
    NgContentComponetComponent
  ],
  imports: [    
    ReactiveFormsModule,  
    FormsModule,    
    RouterModule,
    MedicoRoutingModule,
    SharedModule,    
    MatNativeDateModule,
    DemoMaterialModule, 
    CommonModule  
  ],
  entryComponents: [ NgContentComponetComponent],
  bootstrap: [ NgContentComponetComponent],
  providers: []
})

export class MedicoModule { }
