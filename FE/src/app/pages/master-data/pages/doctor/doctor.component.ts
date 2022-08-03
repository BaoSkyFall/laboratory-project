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
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', [ValidationService.patternValidatorPhone]),
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
    this.getListLevelDoctor()

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
      this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
  getListSpecialist() {
    this.specialistService.getSpecialistList({}).subscribe((res: any) => {
      this.data.listSpecialist = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
  onSubmit() {
    console.log(this.doctorForm);
    if (this.doctorForm.invalid) {
      Utils.validateAllFormFields(this.doctorForm);
      return;
    }
    // this.close()
  }
  open(): void {
    this.data.visible = true;
  }

  close(): void {
    this.data.visible = false;
  }
}
