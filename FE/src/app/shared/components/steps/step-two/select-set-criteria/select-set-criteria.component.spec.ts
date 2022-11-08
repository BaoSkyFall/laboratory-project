import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSetCriteriaComponent } from './select-set-criteria.component';

describe('SelectSetCriteriaComponent', () => {
  let component: SelectSetCriteriaComponent;
  let fixture: ComponentFixture<SelectSetCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSetCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSetCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
