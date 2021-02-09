import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCalculoComponent } from './nuevo-calculo.component';

describe('NuevoCalculoComponent', () => {
  let component: NuevoCalculoComponent;
  let fixture: ComponentFixture<NuevoCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
