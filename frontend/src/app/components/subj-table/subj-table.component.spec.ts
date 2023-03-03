import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjTableComponent } from './subj-table.component';

describe('SubjTableComponent', () => {
  let component: SubjTableComponent;
  let fixture: ComponentFixture<SubjTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
