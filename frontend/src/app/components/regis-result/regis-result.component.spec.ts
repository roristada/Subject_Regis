import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisResultComponent } from './regis-result.component';

describe('RegisResultComponent', () => {
  let component: RegisResultComponent;
  let fixture: ComponentFixture<RegisResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
