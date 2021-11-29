import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormNaveComponent } from './modal-form-nave.component';

describe('ModalFormNaveComponent', () => {
  let component: ModalFormNaveComponent;
  let fixture: ComponentFixture<ModalFormNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
