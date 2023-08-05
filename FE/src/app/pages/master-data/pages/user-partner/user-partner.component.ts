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
import { IUser, UserPartnerItem } from './user-partner.model';
import { SYSTEM_ROLE } from 'src/app/configs';
import * as _ from 'lodash';




@Component({
  selector: 'app-user-partner',
  templateUrl: './user-partner.component.html',
  styleUrls: ['./user-partner.component.scss']
})
export class UserPartnerComponent implements OnInit {
  data = {
    total: 0,
    listUserPartner: [] as UserPartnerItem[],
    listUserFlatten: [] as IUser[],
    listUserFlattenDisplay: [] as IUser[],
    listUserFlattenSelected: [] as IUser[],
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
    searchKeyUserFlatten: '',
    category: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  userPartnerForm: FormGroup;
  SYSTEM_ROLE = SYSTEM_ROLE
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
    this.getListUserFlatten()

  }
  onSearch() {
    this.data.meta.pageIndex = 1;
    this.data.meta.pageSize = 10;
    this.getListUserPartner();
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
  getListUserFlatten() {
    const payload = {
      pageIndex: this.data.meta.pageIndex,
      pageSize: this.data.meta.pageSize,
      searchKey: this.dataFilter.searchKey
    }
    this.userPartnerService.getUserFlattenList(payload).subscribe((res: any) => {
      this.data.listUserFlatten = res?.data || [];
      this.data.listUserFlattenDisplay = [...this.data.listUserFlatten.filter(item => item._id)]
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  formatterNumber = (value: number): string => this.numberLabelPipe.transform(value);

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
  onSearchUserFlatten() {
    this.data.listUserFlattenDisplay = this.data.listUserFlatten.filter((item: IUser) => `${item.name} ${item.email} ${item.fullName}`?.toLocaleLowerCase().
      indexOf(this.dataFilter.searchKeyUserFlatten.toLocaleLowerCase()) !== -1);

  }
  onCheckUserFlatten(evt: any, item: IUser) {
    const checked = evt.currentTarget.checked;
    if (checked) {
      this.data.listUserFlattenSelected.push(item);
    }
    else {
      const indexSelected = _.findIndex(this.data.listUserFlattenSelected, itemSelect => itemSelect._id === item._id);
      if (indexSelected > -1)
        this.data.listUserFlattenSelected.splice(indexSelected, 1)
    }
  }
  onDeleteSelectedUserFlatten(item: IUser, index: number) {
    const indexUserFlatten = _.findIndex(this.data.listUserFlatten, itemSelect => itemSelect._id === item._id);
    if (indexUserFlatten > -1) {
      this.data.listUserFlattenSelected.splice(index, 1);
      this.data.listUserFlatten[indexUserFlatten].checked = false;
    }
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Nhóm Người Dùng';
    this.userPartnerFormControl.partnerUser.setValue([]);

    this.data.isCreate = true;
  }

  close(): void {
    this.userPartnerForm.reset();
    this.data.visible = false;
    this.dataFilter.searchKeyUserFlatten = '';
    this.data.listUserFlattenSelected = [];
    this.onSearchUserFlatten();
  }



}