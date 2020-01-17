import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public pacientes: Paciente[];
  colunas: string[] = ['nome', 'email', 'cpf', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'acoes'];

  constructor(private pacienteService: PacienteService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.pacienteService.listar()
      .subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  editar({ id }: Paciente): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: Paciente): void {
    this.pacienteService.remover(id)
      .subscribe(() => this.atualizar());
  }
}
