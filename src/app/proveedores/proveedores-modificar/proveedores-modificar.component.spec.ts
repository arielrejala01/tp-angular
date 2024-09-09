import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresModificarComponent } from './proveedores-modificar.component';

describe('ProveedoresModificarComponent', () => {
  let component: ProveedoresModificarComponent;
  let fixture: ComponentFixture<ProveedoresModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresModificarComponent]
    });
    fixture = TestBed.createComponent(ProveedoresModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
