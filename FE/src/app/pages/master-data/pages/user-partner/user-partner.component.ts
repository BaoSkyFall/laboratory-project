import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { UserPartnerService } from '../user-partner/user-partner.service';
import { SpecialistService } from '../specialist/specialist.service';
import { ValidationService } from '@shared/services/validation.service';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { NumberLabelPipe } from '@shared/pipes/number-label.pipe';
import { CategoryItem, CriteriaItem } from '../criteria/criteria.model';
import { CriteriaService } from '../criteria/criteria.service';
import { UserPartnerItem } from './user-partner.model';




@Component({
  selector: 'app-user-partner',
  templateUrl: './user-partner.component.html',
  styleUrls: ['./user-partner.component.scss']
})
export class UserPartnerComponent implements OnInit {
  data = {
    total: 0,
    listUserPartner: [] as UserPartnerItem[],
    listCriteria: [] as CriteriaItem[],
    listCategory: [] as CategoryItem[],
    visible: false,
    isCreate: true,
    titleDrawer: '',
    meta: {
      pageSize: 10,
      pageIndex: 1,
    }
  }
  dataFilter = {
    searchKey: '',
    category: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  userPartnerForm: FormGroup;

  constructor(
    private userPartnerService: UserPartnerService,
    private criteriaService: CriteriaService,
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private numberLabelPipe: NumberLabelPipe,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.userPartnerForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      partnerUser: this.fb.control([''], Validators.required),
    })

  }
  get userPartnerFormControl() {
    return this.userPartnerForm.controls;
  }
  get userPartnerFormControlCriteriaList() {
    return this.userPartnerFormControl.partnerUser as FormArray
  }
  ngOnInit(): void {
    this.getListUserPartner();
    this.getListCriteria();
    this.getListCategory();

  }
  onSearch() {
    this.data.meta.pageIndex = 1;
    this.data.meta.pageSize = 10;
    this.getListUserPartner()
  }
  getListUserPartner() {
    const payload = {
      pageIndex: this.data.meta.pageIndex,
      pageSize: this.data.meta.pageSize,
      searchKey: this.dataFilter.searchKey
    }
    this.userPartnerService.getUserPartnerList(payload).subscribe((res: any) => {
      this.data.listUserPartner = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCategory() {
    this.userPartnerService.getCategoryList({}).subscribe((res: any) => {
      this.data.listCategory = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  formatterNumber = (value: number): string => this.numberLabelPipe.transform(value);
  getListCriteria() {
    const payload = {
      pageIndex: this.data.meta.pageIndex,
      pageSize: 999,
      searchKey: this.dataFilter.searchKey,
      category: this.dataFilter.category,
    }
    this.criteriaService.getCriteriaList(payload).subscribe((res: any) => {
      this.data.listCriteria = res?.data || [];
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  onSubmit() {

    if (this.userPartnerForm.invalid) {
      // this.userPartnerForm.markAllAsTouched();
      Utils.validateAllFormFields(this.userPartnerForm);
      return;
    }
    const value = this.userPartnerForm.value;
    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.userPartnerService.createUserPartnerList(this.userPartnerForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Người Dùng thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListUserPartner();
      })
    }
    //Edit
    else {
      this.userPartnerService.editUserPartnerList(this.userPartnerForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Người Dùng thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListUserPartner();
      })
    }
    // this.close()
  }
  edit(item: UserPartnerItem) {
    this.userPartnerFormControl._id.setValue(item._id);
    // this.userPartnerFormControl.name.setValue(item.name);
    this.userPartnerFormControl.partnerUser.setValue(item.partnerUser.map(item => item._id));
    // this.data.titleDrawer = `Người Dùng ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: UserPartnerItem) {
    this.userPartnerService.deleteUserPartnerList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Người Dùng thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListUserPartner();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Người Dùng';
    this.userPartnerFormControl.partnerUser.setValue([]);

    this.data.isCreate = true;
  }

  close(): void {
    this.userPartnerForm.reset();
    this.data.visible = false;
  }



}
