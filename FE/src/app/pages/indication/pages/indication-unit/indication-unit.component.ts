import { SpecialistService } from './../../../master-data/pages/specialist/specialist.service';
import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { IndicationUnitService } from './indication-unit.service';
import { ValidationService } from '@shared/services/validation.service';
import { CategoryItem, IndicationUnitItem } from './indication-unit.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { NumberLabelPipe } from '@shared/pipes/number-label.pipe';




@Component({
  selector: 'app-indication-unit',
  templateUrl: './indication-unit.component.html',
  styleUrls: ['./indication-unit.component.scss']
})
export class IndicationUnitComponent implements OnInit {
  data = {
    total: 0,
    listIndicationUnit: [] as IndicationUnitItem[],
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
  indicationUnitForm: FormGroup;

  constructor(
    private indicationUnitService: IndicationUnitService,
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private numberLabelPipe: NumberLabelPipe,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.indicationUnitForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      category: this.fb.control('', [Validators.required]),
      priceMaster: this.fb.control('', [Validators.required]),
      referenceIndex: this.fb.control('', [Validators.required]),
    })

  }
  get indicationUnitFormControl() {
    return this.indicationUnitForm.controls;
  }
  ngOnInit(): void {
    this.getListIndicationUnit();
    this.getListCategory();

  }
  onSearch() {
    this.data.meta.pageIndex = 1;
    this.data.meta.pageSize = 10;
    this.getListIndicationUnit()
  }
  getListIndicationUnit() {
    const payload = {
      pageIndex: this.data.meta.pageIndex,
      pageSize: this.data.meta.pageSize,
      searchKey: this.dataFilter.searchKey,
      category: this.dataFilter.category,
    }
    this.indicationUnitService.getIndicationUnitList(payload).subscribe((res: any) => {
      this.data.listIndicationUnit = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCategory() {
    this.indicationUnitService.getCategoryList({}).subscribe((res: any) => {
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

  onSubmit() {
    console.log(this.indicationUnitForm);

    if (this.indicationUnitForm.invalid) {
      // this.indicationUnitForm.markAllAsTouched();
      Utils.validateAllFormFields(this.indicationUnitForm);
      return;
    }
    const value = this.indicationUnitForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.indicationUnitService.createIndicationUnitList(this.indicationUnitForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Chỉ tiêu xét nghiệm thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListIndicationUnit();
      })
    }
    //Edit
    else {
      this.indicationUnitService.editIndicationUnitList(this.indicationUnitForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Chỉ tiêu xét nghiệm thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListIndicationUnit();
      })
    }
    // this.close()
  }
  edit(item: IndicationUnitItem) {
    this.indicationUnitFormControl._id.setValue(item._id);
    this.indicationUnitFormControl.name.setValue(item.name);
    this.indicationUnitFormControl.category.setValue(item.category._id);
    this.indicationUnitFormControl.priceMaster.setValue(item.priceMaster);
    this.indicationUnitFormControl.referenceIndex.setValue(item.referenceIndex);

    this.data.titleDrawer = `Chỉ tiêu xét nghiệm ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: IndicationUnitItem) {
    this.indicationUnitService.deleteIndicationUnitList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Chỉ tiêu xét nghiệm thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListIndicationUnit();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Chỉ tiêu xét nghiệm';
    this.data.isCreate = true;
  }

  close(): void {
    this.indicationUnitForm.reset();
    this.data.visible = false;
  }



}
