import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaultObject } from '@shared/interfaces';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import { DoctorItem } from 'src/app/pages/master-data/pages/doctor/doctor.model';
import { UnitCompanyItem } from 'src/app/pages/master-data/pages/unitCompany/unitCompany.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit, OnChanges {
  @Input() basicInformation: any;
  @Input() usageInformation: any;
  @Input() listUnitCompany: UnitCompanyItem[];
  @Input() listDoctor: DoctorItem[];
  @Input() cart: {
    criteriaList: CriteriaItem[],
    criteriaSetList: CriteriaSetItem[],
  }
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges({ basicInformation, cart }: SimpleChanges): void {
    if (basicInformation?.currentValue) {

    }
    if (cart?.currentValue) {
      this.cart.criteriaSetList.forEach(item => {
        item.expand = true;
      })
    }
  }
}
