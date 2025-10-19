import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConsuladminComponent} from './gestion-consuladmin.component';

describe('GestionConsuladminComponent', () => {
  let component: GestionConsuladminComponent;
  let fixture: ComponentFixture<GestionConsuladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionConsuladminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionConsuladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
