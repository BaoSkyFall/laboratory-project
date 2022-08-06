import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { UnitCompanyService } from '../unitCompany/unitCompany.service';
import { ValidationService } from '@shared/services/validation.service';
import { UnitCompanyItem } from '../unitCompany/unitCompany.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';




@Component({
  selector: 'app-unitCompany',
  templateUrl: './unitCompany.component.html',
  styleUrls: ['./unitCompany.component.scss']
})
export class UnitCompanyComponent implements OnInit {
  data = {
    total: 0,
    listUnitCompany: [] as UnitCompanyItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  unitCompanyForm: FormGroup;

  constructor(
    private unitCompanyService: UnitCompanyService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.unitCompanyForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      address: this.fb.control('', [Validators.required]),
    })

  }
  get unitCompanyFormControl() {
    return this.unitCompanyForm.controls;
  }
  ngOnInit(): void {
    this.getListUnitCompany();

  }
  getListUnitCompany() {
    this.unitCompanyService.getUnitCompanyList({}).subscribe((res: any) => {
      this.data.listUnitCompany = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  onSubmit() {
    console.log(this.unitCompanyForm);

    if (this.unitCompanyForm.invalid) {
      // this.unitCompanyForm.markAllAsTouched();
      Utils.validateAllFormFields(this.unitCompanyForm);
      return;
    }
    const value = this.unitCompanyForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.unitCompanyService.createUnitCompanyList(this.unitCompanyForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Đơn vị bệnh viện thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListUnitCompany();
      })
    }
    //Edit
    else {
      this.unitCompanyService.editUnitCompanyList(this.unitCompanyForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Đơn vị bệnh viện thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListUnitCompany();
      })
    }
    // this.close()
  }
  edit(item: UnitCompanyItem) {
    this.unitCompanyFormControl._id.setValue(item._id);
    this.unitCompanyFormControl.name.setValue(item.name);
    this.unitCompanyFormControl.address.setValue(item.address);
    this.data.titleDrawer = `Đơn vị bệnh viện ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: UnitCompanyItem) {
    this.unitCompanyService.deleteUnitCompanyList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Đơn vị bệnh viện thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListUnitCompany();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Chuyên Khoa';
    this.data.isCreate = true;
  }

  close(): void {
    this.unitCompanyForm.reset();
    this.data.visible = false;
  }



}
