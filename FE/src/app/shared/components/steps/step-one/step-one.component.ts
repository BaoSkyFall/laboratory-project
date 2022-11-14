import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorItem } from 'src/app/pages/master-data/pages/doctor/doctor.model';
import { UnitCompanyItem } from 'src/app/pages/master-data/pages/unitCompany/unitCompany.model';
import Utils from '@shared/helper/utils';
import * as _ from 'lodash';
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Input() listUnitCompany: UnitCompanyItem[];
  @Input() listDoctor: DoctorItem[];
  @Output() onSubmitForm = new EventEmitter();
  basicInformationFormGroup: FormGroup;
  constructor(private fb: FormBuilder
  ) {
    this.basicInformationFormGroup = this.fb.group({
      doctor: this.fb.control('', Validators.required),
      unit: this.fb.control('', Validators.required),
      issue: this.fb.control('', Validators.required),
      patient: this.fb.control('', Validators.required),
      phoneNumber: this.fb.control('', Validators.required),
      addressPatient: this.fb.control('', Validators.required),
      addressGetTest: this.fb.control('', Validators.required)
    })

  }
  get basicInformationFormControl() {
    return this.basicInformationFormGroup.controls;
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.basicInformationFormGroup.markAllAsTouched();
    this.basicInformationFormGroup.markAsDirty();
    if (this.basicInformationFormGroup.invalid) {
      Utils.validateAllFormFields(this.basicInformationFormGroup);
      return;

    }
    const value = this.basicInformationFormGroup.value;
    value.doctorName = _.find(this.listDoctor, item => item._id == value.doctor)?.name
    value.unitName = _.find(this.listUnitCompany, item => item._id == value.unit)?.name
    this.onSubmitForm.emit(value);
  }
}
