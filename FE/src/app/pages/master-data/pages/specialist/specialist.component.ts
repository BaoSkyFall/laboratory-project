import { DEFINED_CODE } from './../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { SpecialistService } from '../specialist/specialist.service';
import { ValidationService } from '@shared/services/validation.service';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';




@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {
  data = {
    total: 0,
    listSpecialist: [] as SpecialistItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  specialistForm: FormGroup;

  constructor(
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.specialistForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      code: this.fb.control('', [Validators.required]),
    })

  }
  get specialistFormControl() {
    return this.specialistForm.controls;
  }
  ngOnInit(): void {
    this.getListSpecialist();

  }
  getListSpecialist() {
    this.specialistService.getSpecialistList({}).subscribe((res: any) => {
      this.data.listSpecialist = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  onSubmit() {
    console.log(this.specialistForm);

    if (this.specialistForm.invalid) {
      // this.specialistForm.markAllAsTouched();
      Utils.validateAllFormFields(this.specialistForm);
      return;
    }
    const value = this.specialistForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.specialistService.createSpecialistList(this.specialistForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Chuyên khoa thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListSpecialist();
      })
    }
    //Edit
    else {
      this.specialistService.editSpecialistList(this.specialistForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Chuyên khoa thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListSpecialist();
      })
    }
    // this.close()
  }
  edit(item: SpecialistItem) {
    this.specialistFormControl._id.setValue(item._id);
    this.specialistFormControl.name.setValue(item.name);
    this.specialistFormControl.code.setValue(item.code);
    this.data.titleDrawer = `Chuyên khoa ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: SpecialistItem) {
    this.specialistService.deleteSpecialistList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Chuyên khoa thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListSpecialist();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Chuyên Khoa';
    this.data.isCreate = true;
  }

  close(): void {
    this.specialistForm.reset();
    this.data.visible = false;
  }



}
