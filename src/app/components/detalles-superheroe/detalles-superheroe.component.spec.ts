import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSuperheroeComponent } from './detalles-superheroe.component';

describe('DetallesSuperheroeComponent', () => {
  let component: DetallesSuperheroeComponent;
  let fixture: ComponentFixture<DetallesSuperheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSuperheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
