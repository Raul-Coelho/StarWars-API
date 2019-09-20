import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanetsComponent } from './card-planets.component';

describe('CardPlanetsComponent', () => {
  let component: CardPlanetsComponent;
  let fixture: ComponentFixture<CardPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
