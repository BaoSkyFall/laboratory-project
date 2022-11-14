import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaultObject } from '@shared/interfaces';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import { DoctorItem } from 'src/app/pages/master-data/pages/doctor/doctor.model';
import { UnitCompanyItem } from 'src/app/pages/master-data/pages/unitCompany/unitCompany.model';
import * as _ from 'lodash';
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
  @Input() criteriaList: CriteriaItem[];
  @Input() criteriaSetList: CriteriaSetItem[];
  summaryData = {
    totalPriceCriteriaSet: 0,
    totalQuantityCriteriaSet: 0,
    totalPriceCriteria: 0,
    totalQuantityCriteria: 0,
  }

  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges({ basicInformation, criteriaSetList, criteriaList }: SimpleChanges): void {

    if (criteriaSetList) {
      this.criteriaSetList.forEach(item => {
        item.expand = true;
      })
      this.summaryData.totalPriceCriteriaSet = _.sumBy(this.criteriaSetList, item => _.sumBy(item.criteriaList, o => o.priceMaster))
      this.summaryData.totalQuantityCriteriaSet = _.sumBy(this.criteriaSetList, item => _.sumBy(item.criteriaList, o => o.qty || 1));
      console.log('summaryData:', this.summaryData)
    }
    if (criteriaList) {
      this.summaryData.totalPriceCriteria = _.sumBy(this.criteriaList, item => _.isNumber(item.newPrice) ? item.newPrice : item.priceMaster);
      this.summaryData.totalQuantityCriteria = _.sumBy(this.criteriaList, item => item.qty || 0);
      console.log('summaryData:', this.summaryData)
    }

  }
}
