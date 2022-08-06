import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DoctorItem } from '../doctor/doctor.model';
import { LevelDoctorItem } from './specialist.model';
import { LevelDoctorService } from './specialist.service';

@Component({
  selector: 'app-level-Doctor',
  templateUrl: './level-Doctor.component.html',
  styleUrls: ['./level-Doctor.component.scss']
})
export class LevelDoctorComponent implements OnInit {
  data = {
    total: 0,
    listDoctor: [] as DoctorItem[],
    listLevelDoctor: [] as LevelDoctorItem[],
    // listSpecialist: [] as SpecialistItem[],
  }
  dateFormat: string = 'DD/MM/YYYY';
  constructor(private levelDoctorService: LevelDoctorService,
    private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  getListLevelDoctor() {
    this.levelDoctorService.getLevelDoctorList({}).subscribe((res: any) => {
      this.data.listLevelDoctor = res?.data || [];
      this.data.total = res?.total;
      this.cdf.detectChanges();

    }, err => {
      console.log('err:', err);
      // this.notificationService.showToastr('Đã có lỗi xảy ra. Vui lòng thử lại sau ít phút!', 'success')
    })
  }
}
