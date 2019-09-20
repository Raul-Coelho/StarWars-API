import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpeciesComponent } from './card-species.component';

describe('CardSpeciesComponent', () => {
  let component: CardSpeciesComponent;
  let fixture: ComponentFixture<CardSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
