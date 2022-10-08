import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { CriteriaSetService } from '../criteria-set/criteria-set.service';
import { SpecialistService } from '../specialist/specialist.service';
import { ValidationService } from '@shared/services/validation.service';
import { CriteriaSetItem } from '../criteria-set/criteria-set.model';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { NumberLabelPipe } from '@shared/pipes/number-label.pipe';
import { CategoryItem, CriteriaItem } from '../criteria/criteria.model';
import { CriteriaService } from '../criteria/criteria.service';




@Component({
  selector: 'app-criteria-set',
  templateUrl: './criteria-set.component.html',
  styleUrls: ['./criteria-set.component.scss']
})
export class CriteriaSetComponent implements OnInit {
  data = {
    total: 0,
    listCriteriaSet: [] as CriteriaSetItem[],
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
  criteriaSetForm: FormGroup;

  constructor(
    private criteriaSetService: CriteriaSetService,
    private criteriaService: CriteriaService,
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private numberLabelPipe: NumberLabelPipe,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.criteriaSetForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      criteriaList: this.fb.array([]),
    })

  }
  get criteriaSetFormControl() {
    return this.criteriaSetForm.controls;
  }
  get criteriaSetFormControlCriteriaList() {
    return this.criteriaSetFormControl.criteriaList as FormArray
  }
  ngOnInit(): void {
    this.getListCriteriaSet();
    this.getListCriteria();
    this.getListCategory();

  }
  onSearch() {
    this.data.meta.pageIndex = 1;
    this.data.meta.pageSize = 10;
    this.getListCriteriaSet()
  }
  getListCriteriaSet() {
    const payload = {
      pageIndex: this.data.meta.pageIndex,
      pageSize: this.data.meta.pageSize,
      searchKey: this.dataFilter.searchKey
    }
    this.criteriaSetService.getCriteriaSetList(payload).subscribe((res: any) => {
      this.data.listCriteriaSet = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCategory() {
    this.criteriaSetService.getCategoryList({}).subscribe((res: any) => {
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
      pageSize: this.data.meta.pageSize,
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
    console.log(this.criteriaSetForm);

    if (this.criteriaSetForm.invalid) {
      // this.criteriaSetForm.markAllAsTouched();
      Utils.validateAllFormFields(this.criteriaSetForm);
      return;
    }
    const value = this.criteriaSetForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.criteriaSetService.createCriteriaSetList(this.criteriaSetForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.CREATED_DATA_SUCCESS) {
          this.notificationService.showToastr('Thêm mới Gói xét nghiệm thành công', 'success')


        }
        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        console.log('err:', err)
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
      }, () => {
        this.close()
        this.getListCriteriaSet();
      })
    }
    //Edit
    else {
      this.criteriaSetService.editCriteriaSetList(this.criteriaSetForm.value).subscribe((res: any) => {
        if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
          this.notificationService.showToastr('Cập nhật Gói xét nghiệm thành công', 'success')
        }

        else {
          this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

        }

      }, err => {
        this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }, () => {
        this.close()
        this.getListCriteriaSet();
      })
    }
    // this.close()
  }
  edit(item: CriteriaSetItem) {
    this.criteriaSetFormControl._id.setValue(item._id);
    this.criteriaSetFormControl.name.setValue(item.name);
    item.criteriaList.map(
      (actor: any) => {
        const criteriaForm = this.fb.group({
          _id: item._id,
        });
        const arr = <FormArray>(this.criteriaSetFormControl.criteriaList)
        arr.controls.push(criteriaForm);
      }
    );
    console.log('this.criteriaSetFormControl.criteriaLis:', this.criteriaSetFormControl.criteriaList)
    // this.criteriaSetFormControl.criteriaList.patchValue(item.criteriaList.map(item => item._id));
    // this.criteriaSetFormControl.category.setValue(item.category._id);
    // this.criteriaSetFormControl.priceMaster.setValue(item.priceMaster);
    // this.criteriaSetFormControl.referenceIndex.setValue(item.referenceIndex);

    this.data.titleDrawer = `Gói xét nghiệm ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: CriteriaSetItem) {
    this.criteriaSetService.deleteCriteriaSetList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Gói xét nghiệm thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListCriteriaSet();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Gói xét nghiệm';
    this.data.isCreate = true;
  }

  close(): void {
    this.criteriaSetForm.reset();
    this.data.visible = false;
  }



}
