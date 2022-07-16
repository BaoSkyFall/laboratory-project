import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { SelectTransportCenterService } from './select-transport-center.service';
import { BaseSearch } from "@shared/models/base-search";
import { CONFIG } from '../../constants/config.constants';

export class TransportCenterSearchModel extends BaseSearch {
  public providerId: string;
  public reportType: string;
  public daily?: Date;
  public monthly?: Date;
}

@Component({
  selector: 'app-select-transport-center',
  templateUrl: './select-transport-center.component.html',
  styleUrls: ['./select-transport-center.component.scss']
})
export class SelectTransportCenterComponent implements OnInit {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() executeCallbackDownload: EventEmitter<any> = new EventEmitter<boolean>();
  @Output() executeCallbackSendReport: EventEmitter<any> = new EventEmitter<boolean>();
  datePicker: Date;
  monthPicker: Date;
  listTransport: [];
  typeReport: any;
  selectedTransport: string;
  selectedReportType: any;
  modelSearch: TransportCenterSearchModel;
  constructor(
    private service: SelectTransportCenterService
  ) {
    this.listTransport = [];
    this.typeReport = [];
    this.initialData();
  }

  ngOnInit(): void {
    this.typeReport = CONFIG.TYPE_SENT_REPORT;
    this.selectedReportType = CONFIG.TYPE_SENT_REPORT[0] || null;
    this.service.getAllTransportCenter().subscribe((response: any) => {
      this.listTransport = response.data || [];
    });
  }

  initialData(): void {
    this.selectedTransport = null;
    this.selectedReportType = null;
    var d = new Date();
    const yesterday = d.setDate(d.getDate() - 1);
    const lastMonth = d.setMonth(d.getMonth() - 1);
    this.datePicker = new Date(yesterday);
    this.monthPicker = new Date(lastMonth);
    this.modelSearch = {
      providerId: null,
      reportType: null,
      daily: null,
      monthly: null
    };
  }

  disabledCurrentDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.datePicker) > 0;
  }

  disabledCurrentMonth = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.monthPicker) > 0;
  }

  onClose(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.initialData();
  }

  onSendReport(type: number): void {
    this.modelSearch.daily = this.datePicker;
    this.modelSearch.monthly = this.monthPicker;
    this.modelSearch.reportType = this.selectedReportType?.key;
    this.modelSearch.providerId = this.selectedTransport;
    if (type == 1) {
      this.executeCallbackDownload.emit(this.modelSearch);
    } else {
      this.executeCallbackSendReport.emit(this.modelSearch);
    }
  }

  // onChangeTransportCenter($event): void {
  //   console.log($event);
  //   this.service.getAllReportByTransportCode($event).subscribe((response: any) => {
  //     if (response.data) {
  //       this.typeReport = CONFIG.TYPE_SENT_REPORT;
  //       this.selectedReportType = CONFIG.TYPE_SENT_REPORT[0] || null;
  //     } else {
  //       this.selectedReportType = null;
  //     }
  //   })
  // }

}
