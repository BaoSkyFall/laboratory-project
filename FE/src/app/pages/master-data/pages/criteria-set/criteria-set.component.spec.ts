import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaSetComponent } from './criteria-set.component';

describe('CriteriaSetComponent', () => {
  let component: CriteriaSetComponent;
  let fixture: ComponentFixture<CriteriaSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriteriaSetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
