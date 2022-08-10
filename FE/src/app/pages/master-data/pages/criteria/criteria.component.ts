import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { CriteriaService } from '../criteria/criteria.service';
import { SpecialistService } from '../specialist/specialist.service';
import { ValidationService } from '@shared/services/validation.service';
import { CategoryItem, CriteriaItem } from '../criteria/criteria.model';
import { SpecialistItem } from '../specialist/specialist.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { NumberLabelPipe } from '@shared/pipes/number-label.pipe';




@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  data = {
    total: 0,
    listCriteria: [] as CriteriaItem[],
    listCategory: [] as CategoryItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
  }
  dateFormat: string = 'DD/MM/YYYY';
  criteriaForm: FormGroup;

  constructor(
    private criteriaService: CriteriaService,
    private specialistService: SpecialistService,
    private notificationService: NotificationService,
    private numberLabelPipe: NumberLabelPipe,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.criteriaForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      category: this.fb.control('', [Validators.required]),
      priceMaster: this.fb.control('', [Validators.required]),
      referenceIndex: this.fb.control('', [Validators.required]),
    })

  }
  get criteriaFormControl() {
    return this.criteriaForm.controls;
  }
  ngOnInit(): void {
    this.getListCriteria();
    this.getListCategory();

  }
  getListCriteria() {
    this.criteriaService.getCriteriaList({}).subscribe((res: any) => {
      this.data.listCriteria = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCategory() {
    this.criteriaService.getCategoryList({}).subscribe((res: any) => {
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
    console.log(this.criteriaForm);

    if (this.criteriaForm.invalid) {
      // this.criteriaForm.markAllAsTouched();
      Utils.validateAllFormFields(this.criteriaForm);
      return;
    }
    const value = this.criteriaForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.criteriaService.createCriteriaList(this.criteriaForm.value).subscribe((res: any) => {
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
        this.getListCriteria();
      })
    }
    //Edit
    else {
      this.criteriaService.editCriteriaList(this.criteriaForm.value).subscribe((res: any) => {
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
        this.getListCriteria();
      })
    }
    // this.close()
  }
  edit(item: CriteriaItem) {
    this.criteriaFormControl._id.setValue(item._id);
    this.criteriaFormControl.name.setValue(item.name);
    this.criteriaFormControl.category.setValue(item.category._id);
    this.criteriaFormControl.priceMaster.setValue(item.priceMaster);
    this.criteriaFormControl.referenceIndex.setValue(item.referenceIndex);

    this.data.titleDrawer = `Chỉ tiêu xét nghiệm ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: CriteriaItem) {
    this.criteriaService.deleteCriteriaList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Chỉ tiêu xét nghiệm thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListCriteria();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Chỉ tiêu xét nghiệm';
    this.data.isCreate = true;
  }

  close(): void {
    this.criteriaForm.reset();
    this.data.visible = false;
  }



}
