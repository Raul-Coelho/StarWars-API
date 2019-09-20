import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVehiclesComponent } from './card-vehicles.component';

describe('CardVehiclesComponent', () => {
  let component: CardVehiclesComponent;
  let fixture: ComponentFixture<CardVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
