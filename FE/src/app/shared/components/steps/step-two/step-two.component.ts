import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Input() listCriteria: CriteriaItem[] = [];
  @Input() listCriteriaSet: CriteriaSetItem[] = [];
  @Input() listCategory: CategoryItem[] = [];
  @Input() totalSelectedCriteria: number = 0;
  @Output() onChangeTotalSelectedCriteria = new EventEmitter();


  selectedCriteria: CriteriaItem[] = [];
  selectedSetCriteria: CriteriaSetItem[] = [];
  constructor() { }
  tabs = [
    {
      name: 'Gói Xét Nghiệm',
      icon: 'group'
    },
    {
      name: 'Chỉ tiêu/ Nội dung xét nghiệm',
      icon: 'medicine-box'
    }
  ];
  ngOnInit(): void {
  }
  onChangeSelectedCriteria(evt: any) {
    this.selectedCriteria = evt;
    this.calcTotalCriteria();
  }
  onChangeSelectedSetCriteria(evt: any) {
    this.selectedSetCriteria = evt;
    this.calcTotalCriteria();

  }
  calcTotalCriteria() {
    const totalSelectedCriteria = _.sumBy(this.selectedCriteria, 'qty');
    const totalSelectedSetCriteria = _.sumBy(this.selectedSetCriteria, item => {
      return item.criteriaList.length
    });
    this.totalSelectedCriteria = totalSelectedCriteria + totalSelectedSetCriteria;
    this.onChangeTotalSelectedCriteria.emit(this.totalSelectedCriteria);
  }
}
