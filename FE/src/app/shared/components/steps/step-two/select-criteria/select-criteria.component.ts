import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryItem, CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';

@Component({
  selector: 'app-select-criteria',
  templateUrl: './select-criteria.component.html',
  styleUrls: ['./select-criteria.component.scss']
})
export class SelectCriteriaComponent implements OnInit, OnChanges {
  @Input() listCriteria: CriteriaItem[] = [];
  @Input() listCategory: CategoryItem[] = [];

  listCriteriaShow: CriteriaItem[] = [];
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
    if (listCriteria.currentValue.length) {
      this.onSearch();
    }
  }
}
