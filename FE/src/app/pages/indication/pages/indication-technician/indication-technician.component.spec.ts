import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationTechnicianComponent } from './indication-technician.component';

describe('SpecialistComponent', () => {
  let component: IndicationTechnicianComponent;
  let fixture: ComponentFixture<IndicationTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicationTechnicianComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
