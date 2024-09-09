import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaulaComponent } from './jaula.component';

describe('JaulaComponent', () => {
  let component: JaulaComponent;
  let fixture: ComponentFixture<JaulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaulaComponent]
    });
    fixture = TestBed.createComponent(JaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
