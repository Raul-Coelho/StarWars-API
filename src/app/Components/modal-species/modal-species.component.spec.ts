import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSpeciesComponent } from './modal-species.component';

describe('ModalSpeciesComponent', () => {
  let component: ModalSpeciesComponent;
  let fixture: ComponentFixture<ModalSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
