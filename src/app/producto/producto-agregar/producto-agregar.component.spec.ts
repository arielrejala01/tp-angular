import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAgregarComponent } from './producto-agregar.component';

describe('ProductoAgregarComponent', () => {
  let component: ProductoAgregarComponent;
  let fixture: ComponentFixture<ProductoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoAgregarComponent]
    });
    fixture = TestBed.createComponent(ProductoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
