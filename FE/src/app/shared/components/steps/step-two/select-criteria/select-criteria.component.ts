import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-select-criteria',
  templateUrl: './select-criteria.component.html',
  styleUrls: ['./select-criteria.component.scss']
})
export class SelectCriteriaComponent implements OnInit, OnChanges {
  @Input() listCriteria: CriteriaItem[] = [];
  @Input() listCategory: CategoryItem[] = [];
  listCriteriaShow: CriteriaItem[] = [];
  @Input() selectedCriteria: CriteriaItem[] = [];
  @Output() onChangeSelectedCriteria = new EventEmitter();
  dataFilter = {
    searchKey: '',
    category: ''
  }
  constructor() { }
  onSearch() {
    this.listCriteriaShow = this.listCriteria.filter(item => (this.dataFilter.category ? item.category._id == this.dataFilter.category : true)
      && item.name.includes(this.dataFilter.searchKey));
    // this.data.meta.pageIndex = 1;
    // this.data.meta.pageSize = 10;
    // this.getListCriteria()
  }
  ngOnInit(): void {
  }
  ngOnChanges({ listCriteria }: SimpleChanges) {
    if (listCriteria?.currentValue?.length) {
      this.onSearch();
    }
  }
  onValueCountChanges(evt: number, _id: string | undefined) {
    const index = _.findIndex(this.listCriteria, item => item._id == _id);
    const indexSelected = _.findIndex(this.selectedCriteria, item => item._id == _id);
    this.listCriteria[index].qty = evt;
    if (evt) {
      if (indexSelected > -1) {
        this.selectedCriteria[indexSelected].qty = this.selectedCriteria[indexSelected].qty || 0 + evt;
      }
      else {
        this.selectedCriteria.push(this.listCriteria[index])
      }
    }
    else {
      if (indexSelected > -1) {
        this.selectedCriteria = _.pullAt(this.selectedCriteria, indexSelected)
      }
    }

    this.onChangeSelectedCriteria.emit(this.selectedCriteria)
  }

}
