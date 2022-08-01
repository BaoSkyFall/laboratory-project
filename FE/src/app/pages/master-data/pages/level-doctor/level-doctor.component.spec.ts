import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDoctorComponent } from './level-doctor.component';

describe('LevelDoctorComponent', () => {
  let component: LevelDoctorComponent;
  let fixture: ComponentFixture<LevelDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
