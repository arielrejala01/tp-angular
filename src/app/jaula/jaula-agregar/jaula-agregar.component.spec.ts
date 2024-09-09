import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaulaAgregarComponent } from './jaula-agregar.component';

describe('JaulaAgregarComponent', () => {
  let component: JaulaAgregarComponent;
  let fixture: ComponentFixture<JaulaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaulaAgregarComponent]
    });
    fixture = TestBed.createComponent(JaulaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
