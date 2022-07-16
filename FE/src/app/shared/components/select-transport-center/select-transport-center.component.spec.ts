import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTransportCenterComponent } from './select-transport-center.component';

describe('SelectTransportCenterComponent', () => {
  let component: SelectTransportCenterComponent;
  let fixture: ComponentFixture<SelectTransportCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTransportCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTransportCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
