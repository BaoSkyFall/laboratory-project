/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountNumberComponent } from './count-number.component';

describe('CountNumberComponent', () => {
  let component: CountNumberComponent;
  let fixture: ComponentFixture<CountNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountNumberComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
