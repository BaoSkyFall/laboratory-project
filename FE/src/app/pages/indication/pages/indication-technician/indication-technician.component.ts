import { DEFINED_CODE } from '../../../../shared/constants/enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { IndicationTechnicianService } from './indication-technician.service';
import { ValidationService } from '@shared/services/validation.service';
import { IndicationTechnicianItem } from './indication-technician.model';
import Utils from '@shared/helper/utils';
import { Helpers } from '@shared/helper';
import { BehaviorSubject, Subscription } from 'rxjs';




@Component({
  selector: 'app-indication-techinician',
  templateUrl: './indication-technician.component.html',
  styleUrls: ['./indication-technician.component.scss']
})
export class IndicationTechnicianComponent implements OnInit {
  data = {
    total: 0,
    listIndicationTechnician: [] as IndicationTechnicianItem[],
    visible: false,
    isCreate: true,
    titleDrawer: ''
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

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }


}
