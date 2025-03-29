import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.form.setValue({
      modelo: 'Civic',
      tipo: 'Sedan',
      marca: 'Honda',
      ano: 2020,
      dataAquisicao: '2023-01-01',
      tamanho: 'Médio',
      peso: 1500,
      combustivel: 'Gasolina',
      automatico: true,
      observacoes: 'Carro em ótimo estado'
    });

    expect(component.form.valid).toBeTrue();
  });

  it('should add a car to localStorage on submit', () => {
    spyOn(localStorage, 'setItem');
    component.form.setValue({
      modelo: 'Civic',
      tipo: 'Sedan',
      marca: 'Honda',
      ano: 2020,
      dataAquisicao: '2023-01-01',
      tamanho: 'Médio',
      peso: 1500,
      combustivel: 'Gasolina',
      automatico: true,
      observacoes: 'Carro em ótimo estado'
    });

    component.onSubmit();

    expect(localStorage.setItem).toHaveBeenCalled();
  });
});