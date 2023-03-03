import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRegisComponent } from './submit-regis.component';

describe('SubmitRegisComponent', () => {
  let component: SubmitRegisComponent;
  let fixture: ComponentFixture<SubmitRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
