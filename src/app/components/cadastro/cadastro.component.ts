import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  tipos = ['Sedan', 'SUV', 'Hatchback', 'Conversível', 'Outro'];
  tamanhos = ['Compacto', 'Médio', 'Grande'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required, Validators.min(1886)]], // Ano mínimo ajustado para o primeiro carro
      dataAquisicao: ['', [Validators.required]],
      tamanho: ['', [Validators.required]],
      peso: ['', [Validators.required, Validators.min(0)]],
      combustivel: ['', [Validators.required]],
      automatico: [false],
      observacoes: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const carro = this.form.value;
      // Aqui você pode adicionar a lógica para salvar no backend
      console.log('Dados do carro:', carro);

      // Adiciona à lista de carros
      const carros = JSON.parse(localStorage.getItem('carros') || '[]');
      carros.push({
        id: carros.length + 1,
        ...carro
      });
      localStorage.setItem('carros', JSON.stringify(carros));

      this.snackBar.open('Carro cadastrado com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.router.navigate(['/carros']);
    }
  }

  onCancel() {
    this.router.navigate(['/carros']);
  }
}