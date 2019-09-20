import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharacComponent } from './modal-charac.component';

describe('ModalCharacComponent', () => {
  let component: ModalCharacComponent;
  let fixture: ComponentFixture<ModalCharacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCharacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCharacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
