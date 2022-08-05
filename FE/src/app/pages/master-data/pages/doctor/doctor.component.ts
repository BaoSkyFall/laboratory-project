import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { LevelDoctorService } from '../level-doctor/level-doctor.service';
import { SpecialistService } from '../specialist/specialist.service';
import { DoctorItem } from './doctor.model';
import { DoctorService } from './doctor.service';
import { ValidationService } from '@shared/services/validation.service';
import { LevelDoctorItem } from '../level-doctor/level-doctor.model';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';




@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  data = {
    total: 0,
    listDoctor: [] as DoctorItem[],
    listLevelDoctor: [] as LevelDoctorItem[],
    listSpecialist: [] as SpecialistItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  doctorForm: FormGroup;

  constructor(
    private doctorService: DoctorService,
    private levelDoctorService: LevelDoctorService,
    private specialistService: SpecialistService,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.doctorForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', [Validators.required, ValidationService.patternValidatorPhone]),
      dob: this.fb.control('', Validators.required),
      gender: this.fb.control('', Validators.required),
      specialist: this.fb.control('', Validators.required),
      levelDoctor: this.fb.control('', Validators.required),
    })

  }
  get doctorFormControl() {
    return this.doctorForm.controls;
  }
  ngOnInit(): void {
    this.getListDoctor();
    this.getListLevelDoctor();
    this.getListSpecialist()

  }
  getListDoctor() {
    this.doctorService.getDoctorList({}).subscribe((res: any) => {
      this.data.listDoctor = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
  getListLevelDoctor() {
    this.levelDoctorService.getLevelDoctorList({}).subscribe((res: any) => {
      this.data.listLevelDoctor = res?.data || [];
      this.data.total = res?.total;
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
  getListSpecialist() {
    this.specialistService.getSpecialistList({}).subscribe((res: any) => {
      this.data.listSpecialist = res?.data || [];
      this.data.total = res?.total;
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
  onSubmit() {
    console.log(this.doctorForm);

    if (this.doctorForm.invalid) {
      // this.doctorForm.markAllAsTouched();
      Utils.validateAllFormFields(this.doctorForm);
      return;
    }
    const value = this.doctorForm.value;
    value.dob = Helpers.dateTime.getUnixFromDate(value.dob);
    console.log('value:', value)
    //Create
    if (this.data.isCreate) {
      this.doctorService.createDoctorList(this.doctorForm.value).subscribe(res => {
        console.log('res:', res)
      })
    }
    //Edit
    else {
      this.doctorService.editDoctorList(this.doctorForm.value).subscribe(res => {
        console.log('res:', res)
      })
    }
    // this.close()
  }
  edit(item: DoctorItem) {
    this.doctorFormControl._id.setValue(item._id);
    this.doctorFormControl.name.setValue(item.name);
    this.doctorFormControl.phoneNumber.setValue(item.phoneNumber);
    this.doctorFormControl.email.setValue(item.email);
    this.doctorFormControl.dob.setValue(
      Helpers.dateTime.getDateTimeFromNumber(item.dob));
    this.doctorFormControl.gender.setValue(item.gender);
    this.doctorFormControl.specialist.setValue(item.specialist._id);
    this.doctorFormControl.levelDoctor.setValue(item.levelDoctor._id);
    this.data.titleDrawer = `Bác sĩ ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }

  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Bác sĩ';
    this.data.isCreate = true;
  }

  close(): void {
    this.doctorForm.reset();
    this.data.visible = false;
  }



}
