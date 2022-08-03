import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DoctorItem } from '../doctor/doctor.model';
import { LevelDoctorItem } from '../level-doctor/level-doctor.model';
import { SpecialistItem } from './specialist.model';
import { SpecialistService } from './specialist.service';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {

  data = {
    total: 0,
    listDoctor: [] as DoctorItem[],
    listLevelDoctor: [] as LevelDoctorItem[],
    listSpecialist: [] as SpecialistItem[],
  }
  dateFormat: string = 'DD/MM/YYYY';
  constructor(private specialistService: SpecialistService,
    private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  getListSpecialist() {
    this.specialistService.getSpecialistList({}).subscribe((res: any) => {
      this.data.listSpecialist = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }

}
