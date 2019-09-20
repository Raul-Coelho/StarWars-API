import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlanetsComponent } from './modal-planets.component';

describe('ModalPlanetsComponent', () => {
  let component: ModalPlanetsComponent;
  let fixture: ComponentFixture<ModalPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
