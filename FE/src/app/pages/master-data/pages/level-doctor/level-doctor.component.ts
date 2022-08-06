import { DEFINED_CODE } from './../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { LevelDoctorService } from '../level-doctor/level-doctor.service';
import { SpecialistService } from '../specialist/specialist.service';
import { ValidationService } from '@shared/services/validation.service';
import { LevelDoctorItem } from '../level-doctor/level-doctor.model';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';




@Component({
  selector: 'app-level-doctor',
  templateUrl: './level-doctor.component.html',
  styleUrls: ['./level-doctor.component.scss']
})
export class LevelDoctorComponent implements OnInit {
  data = {
    total: 0,
    listLevelDoctor: [] as LevelDoctorItem[],
    listSpecialist: [] as SpecialistItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  levelDoctorForm: FormGroup;

  constructor(
    private levelDoctorService: LevelDoctorService,
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.levelDoctorForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      code: this.fb.control('', [Validators.required]),
    })

  }
  get levelDoctorFormControl() {
    return this.levelDoctorForm.controls;
  }
  ngOnInit(): void {
    this.getListLevelDoctor();

  }
  getListLevelDoctor() {
    this.levelDoctorService.getLevelDoctorList({}).subscribe((res: any) => {
      this.data.listLevelDoctor = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  onSubmit() {
    console.log(this.levelDoctorForm);

    if (this.levelDoctorForm.invalid) {
      // this.levelDoctorForm.markAllAsTouched();
      Utils.validateAllFormFields(this.levelDoctorForm);
      return;
    }
    const value = this.levelDoctorForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.levelDoctorService.createLevelDoctorList(this.levelDoctorForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Trình độ thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListLevelDoctor();
      })
    }
    //Edit
    else {
      this.levelDoctorService.editLevelDoctorList(this.levelDoctorForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Trình độ thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListLevelDoctor();
      })
    }
    // this.close()
  }
  edit(item: LevelDoctorItem) {
    this.levelDoctorFormControl._id.setValue(item._id);
    this.levelDoctorFormControl.name.setValue(item.name);
    this.levelDoctorFormControl.code.setValue(item.code);
    this.data.titleDrawer = `Trình độ ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: LevelDoctorItem) {
    this.levelDoctorService.deleteLevelDoctorList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Trình độ thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListLevelDoctor();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Trình độ';
    this.data.isCreate = true;
  }

  close(): void {
    this.levelDoctorForm.reset();
    this.data.visible = false;
  }



}
