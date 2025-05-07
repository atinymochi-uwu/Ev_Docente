import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInscritosComponent } from './cursos-inscritos.component';

describe('CursosInscritosComponent', () => {
  let component: CursosInscritosComponent;
  let fixture: ComponentFixture<CursosInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosInscritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
