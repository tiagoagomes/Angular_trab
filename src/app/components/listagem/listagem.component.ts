import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule
  ]
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'modelo', 'tipo', 'marca', 'ano', 'tamanho', 'combustivel', 'automatico', 'acoes'];
  dataSource: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    const dados = localStorage.getItem('carros');
    if (dados) {
      this.dataSource = JSON.parse(dados);
    }
  }

  getStatusColor(automatico: boolean): string {
    return automatico ? 'primary' : 'warn';
  }

  getStatusText(automatico: boolean): string {
    return automatico ? 'Automático' : 'Manual';
  }
}