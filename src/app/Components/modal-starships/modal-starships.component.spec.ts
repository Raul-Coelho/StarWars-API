import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStarshipsComponent } from './modal-starships.component';

describe('ModalStarshipsComponent', () => {
  let component: ModalStarshipsComponent;
  let fixture: ComponentFixture<ModalStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
