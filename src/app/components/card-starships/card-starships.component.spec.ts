import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStarshipsComponent } from './card-starships.component';

describe('CardStarshipsComponent', () => {
  let component: CardStarshipsComponent;
  let fixture: ComponentFixture<CardStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
