import { Component, Input, OnInit } from '@angular/core';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Input() listCriteria: CriteriaItem[] = [];
  @Input() listCriteriaSet: CriteriaSetItem[] = [];
  @Input() listCategory: CategoryItem[] = [];

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

}
