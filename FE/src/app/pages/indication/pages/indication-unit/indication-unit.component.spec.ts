import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationUnitComponent } from './indication-unit.component';

describe('IndicationUnitComponent', () => {
  let component: IndicationUnitComponent;
  let fixture: ComponentFixture<IndicationUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicationUnitComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
