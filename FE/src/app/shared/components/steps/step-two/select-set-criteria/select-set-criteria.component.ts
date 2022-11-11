import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-select-set-criteria',
  templateUrl: './select-set-criteria.component.html',
  styleUrls: ['./select-set-criteria.component.scss']
})
export class SelectSetCriteriaComponent implements OnInit {
  @Input() listCriteriaSet: CriteriaSetItem[] = [];
  @Input() selectedSetCriteria: CriteriaSetItem[] = [];
  @Output() onChangeSelectedSetCriteria = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onChangeCheckboxSetCriteria(evt: any, _id: string | undefined) {
    const index = _.findIndex(this.listCriteriaSet, { _id })
    debugger;
    const indexSelected = _.findIndex(this.selectedSetCriteria, { _id });
    if (evt) {
      this.selectedSetCriteria.push(this.listCriteriaSet[index])
    }
    else {
      if (indexSelected > -1) {
        if (this.selectedSetCriteria.length > 1) {
          this.selectedSetCriteria = this.selectedSetCriteria.splice(indexSelected, 1);
        }
        else if (this.selectedSetCriteria.length == 1) {
          this.selectedSetCriteria = []
        }
      }
    }
    this.onChangeSelectedSetCriteria.emit(this.selectedSetCriteria);
  }
}
