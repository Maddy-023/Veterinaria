import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCitasAdminComponent } from './gestion-citas.component';

describe('GestionCitasAdminComponent', () => {
  let component: GestionCitasAdminComponent;
  let fixture: ComponentFixture<GestionCitasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCitasAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCitasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
