import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit, OnChanges {
  @Input() listCriteria: CriteriaItem[] = [];
  @Input() listCriteriaSet: CriteriaSetItem[] = [];
  @Input() listCategory: CategoryItem[] = [];
  @Input() totalSelectedCriteria: number = 0;
  @Input() triggerCleanProduct: number;
  @Output() onChangeTotalSelectedCriteria = new EventEmitter();
  @Output() onChangeDataSelectedCriteria = new EventEmitter();
  @Output() onChangeDataSelectedSetCriteria = new EventEmitter();



  @Input() selectedCriteria: CriteriaItem[] = [];
  @Input() selectedSetCriteria: CriteriaSetItem[] = [];
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
  ngOnChanges({ triggerCleanProduct, listCriteria, listCriteriaSet }: SimpleChanges): void {
    if (triggerCleanProduct?.currentValue) {
      this.listCriteria = this.listCriteria.map(item => ({ ...item, qty: 0 }));
      this.listCriteriaSet = this.listCriteriaSet.map(item => ({ ...item, checked: false }));
    }
  }
  onChangeSelectedCriteria(evt: any) {
    this.selectedCriteria = evt;
    this.calcTotalCriteria();
    this.onChangeDataSelectedCriteria.emit(this.selectedCriteria);
  }
  onChangeSelectedSetCriteria(evt: any) {
    this.selectedSetCriteria = evt;
    this.calcTotalCriteria();
    this.onChangeDataSelectedSetCriteria.emit(this.selectedSetCriteria);

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
