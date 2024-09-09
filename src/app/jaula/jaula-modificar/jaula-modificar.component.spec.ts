import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaulaModificarComponent } from './jaula-modificar.component';

describe('JaulaModificarComponent', () => {
  let component: JaulaModificarComponent;
  let fixture: ComponentFixture<JaulaModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaulaModificarComponent]
    });
    fixture = TestBed.createComponent(JaulaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
