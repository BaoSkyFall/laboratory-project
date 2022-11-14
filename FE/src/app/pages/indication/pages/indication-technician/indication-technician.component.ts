import { DoctorItem } from './../../../master-data/pages/doctor/doctor.model';
import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { IndicationTechnicianService } from './indication-technician.service';
import { ValidationService } from '@shared/services/validation.service';
import { IndicationTechnicianItem } from './indication-technician.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DoctorService } from 'src/app/pages/master-data/pages/doctor/doctor.service';
import { UnitCompanyService } from 'src/app/pages/master-data/pages/unitCompany/unitCompany.service';
import { UnitCompanyItem } from 'src/app/pages/master-data/pages/unitCompany/unitCompany.model';
import { StepOneComponent } from '@shared/components/steps/step-one/step-one.component';
import { CriteriaService } from 'src/app/pages/master-data/pages/criteria/criteria.service';
import { CriteriaSetService } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.service';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import * as _ from 'lodash';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-indication-techinician',
  templateUrl: './indication-technician.component.html',
  styleUrls: ['./indication-technician.component.scss']
})
export class IndicationTechnicianComponent implements OnInit {
  @ViewChild('stepOneComponent') stepOneComponent!: StepOneComponent;
  step = {
    info: {
      basicInformation: {},
      usageInformation: {}
    },
    cart: {
      criteriaList: [] as CriteriaItem[],
      criteriaSetList: [] as CriteriaSetItem[],
    }
  }

  data = {
    total: 0,
    totalSelectedCriteria: 0,
    listIndicationTechnician: [] as IndicationTechnicianItem[],
    listDoctor: [] as DoctorItem[],
    listUnitCompany: [] as UnitCompanyItem[],
    listCriteriaSet: [] as CriteriaSetItem[],
    listCategory: [] as CategoryItem[],
    listCriteria: [] as CriteriaItem[],
    visible: false,
    isCreate: true,
    triggerCleanProduct: 0,
    titleDrawer: ''
  }
  selected = {
    listCriteriaSet: [] as CriteriaSetItem[],
    listCriteria: [] as CriteriaItem[],
  }


  visible = {
    visibleModalCart: false,
    visibleButtonViewCart: false
  }
  loading = {
    loadingGoToConfirm: false,
  }
  dateFormat: string = 'DD/MM/YYYY';
  indicationTechnicianForm: FormGroup;
  formsCount = 5;
  account$: BehaviorSubject<any> =
    new BehaviorSubject<any>({
      accountType: 'personal',
      accountTeamSize: '50+',
      accountName: '',
      accountPlan: '1',
      businessName: 'Keenthemes Inc.',
      businessDescriptor: 'KEENTHEMES',
      businessType: '1',
      businessDescription: '',
      businessEmail: 'corp@support.com',
      nameOnCard: 'Max Doe',
      cardNumber: '4111 1111 1111 1111',
      cardExpiryMonth: '1',
      cardExpiryYear: '2',
      cardCvv: '123',
      saveCard: '1',
    });
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];

  constructor(
    private indicationTechnicianService: IndicationTechnicianService,
    private notificationService: NotificationService,
    private criteriaService: CriteriaService,
    private criteriaSetService: CriteriaSetService,
    private doctorService: DoctorService,
    private unitCompanyService: UnitCompanyService,
    private fb: FormBuilder,
    private cdf: ChangeDetectorRef
  ) {
    this.indicationTechnicianForm = this.fb.group({
      _id: this.fb.control(''),
      name: this.fb.control('', Validators.required),
      code: this.fb.control('', [Validators.required]),
    })

  }
  get indicationTechnicianFormControl() {
    return this.indicationTechnicianForm.controls;
  }
  ngOnInit(): void {
    this.getListIndicationTechnician();
    this.getListDoctor();
    this.getListUnitCompany();
    this.getListCriteriaSet();
    this.getListCriteria();
    this.getListCategory();

  }

  getListDoctor() {
    this.doctorService.getDoctorList({}).subscribe((res: any) => {
      this.data.listDoctor = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges();

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
  getListIndicationTechnician() {
    this.indicationTechnicianService.getIndicationTechnicianList({}).subscribe((res: any) => {
      this.data.listIndicationTechnician = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCriteria() {
    const payload = {
      pageIndex: 1,
      pageSize: 999,
      searchKey: '',
      category: '',
    }
    this.criteriaService.getCriteriaList(payload).subscribe((res: any) => {
      this.data.listCriteria = res?.data || [];
      this.data.listCriteria = this.data.listCriteria.map(item => ({ ...item, categoryName: item.category.name }))
      this.cdf.detectChanges()
      // this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')
    })
  }
  getListCriteriaSet() {
    const payload = {
      pageIndex: 1,
      pageSize: 999,
      searchKey: ''
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
  onSubmit() {
    console.log(this.indicationTechnicianForm);

    if (this.indicationTechnicianForm.invalid) {
      // this.indicationTechnicianForm.markAllAsTouched();
      Utils.validateAllFormFields(this.indicationTechnicianForm);
      return;
    }
    const value = this.indicationTechnicianForm.value;

    //Create
    if (this.data.isCreate) {
      value._id = undefined;
      this.indicationTechnicianService.createIndicationTechnicianList(this.indicationTechnicianForm.value).subscribe((res: any) => {
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
        this.getListIndicationTechnician();
      })
    }
    //Edit
    else {
      this.indicationTechnicianService.editIndicationTechnicianList(this.indicationTechnicianForm.value).subscribe((res: any) => {
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
        this.getListIndicationTechnician();
      })
    }
    // this.close()
  }
  onChangeTotalSelectedCriteria(evt: any) {
    this.data.totalSelectedCriteria = evt;
  }
  edit(item: IndicationTechnicianItem) {
    this.indicationTechnicianFormControl._id.setValue(item._id);
    this.indicationTechnicianFormControl.name.setValue(item.name);
    this.indicationTechnicianFormControl.code.setValue(item.code);
    this.data.titleDrawer = `Chuyên khoa ${item.name}`
    this.data.visible = true;
    this.data.isCreate = false;
  }
  delete(item: IndicationTechnicianItem) {
    this.indicationTechnicianService.deleteIndicationTechnicianList(item).subscribe((res: any) => {
      if (res?.code == DEFINED_CODE.INTERACT_DATA_SUCCESS) {
        this.notificationService.showToastr('Xóa Chuyên khoa thành công', 'success')
      }

      else {
        this.notificationService.showToastr(res?.errors.message || res?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

      }

    }, err => {
      this.notificationService.showToastr(err?.error.errors.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'error')

    }, () => {
      this.getListIndicationTechnician();
    })
  }
  open(): void {
    this.data.visible = true;
    this.data.titleDrawer = 'Thêm Chuyên Khoa';
    this.data.isCreate = true;
  }

  close(): void {
    this.indicationTechnicianForm.reset();
    this.data.visible = false;
  }

  //Function
  updateAccount = (part: Partial<any>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    this.stepOneComponent.onSubmit();
    // if (this.stepOneComponent.basicInformationFormGroup.invalid) {
    //   return;
    // }
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }
  addToCart() {
    this.visible.visibleButtonViewCart = true;
    this.selected.listCriteria.forEach(item => {
      const _index = _.findIndex(this.step.cart.criteriaList, itemCriteria => item._id == itemCriteria._id);
      if (_index > -1) {
        this.step.cart.criteriaList[_index].qty = (this.step.cart.criteriaList[_index].qty || 0) + (item.qty || 0);
      }
      else {
        this.step.cart.criteriaList.push(item)
      }
    })
    this.selected.listCriteriaSet.forEach(item => {
      item.expand = false;
      this.step.cart.criteriaSetList.push(item)
    })
    this.selected.listCriteria = [];
    this.selected.listCriteriaSet = []
    this.data.totalSelectedCriteria = 0;
    this.data.triggerCleanProduct = Date.now();
    console.log('this.selected:', this.selected)

  }
  onChangeSelectedCriteria(evt: any) {
    this.selected.listCriteria = evt;
  }
  onChangeSelectedSetCriteria(evt: any) {
    this.selected.listCriteriaSet = evt;
  }
  goToConfirmIndication() {
    this.loading.loadingGoToConfirm = true;
    setTimeout(() => {
      this.loading.loadingGoToConfirm = false;
      this.visible.visibleModalCart = false;
      this.nextStep()
    }, 400)
  }
  onSubmitForm(evt: any) {
    console.log('evt:', evt)
    this.step.info.basicInformation = evt;

  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }


}
