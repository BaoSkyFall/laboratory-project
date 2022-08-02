import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { DoctorItem } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  data = {
    total: 0,
    list: [] as DoctorItem[]
  }
  constructor(private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    this.getListDoctor()

  }
  getListDoctor() {
    this.doctorService.getDoctorList({}).subscribe((res: any) => {
      this.data.list = res?.data || [];
      this.data.total = res?.total;
      console.log(this.data.list);
    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
}
