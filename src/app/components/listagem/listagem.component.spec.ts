import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Listagem de Carros');
  });

  it('should display a message when no cars are available', () => {
    component.dataSource = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-data p')?.textContent).toContain('Nenhum carro cadastrado');
  });
});