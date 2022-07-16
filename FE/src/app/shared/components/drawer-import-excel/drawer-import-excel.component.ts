import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './../../../core/services/notification.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-drawer-import-excel',
  templateUrl: './drawer-import-excel.component.html',
  styleUrls: ['./drawer-import-excel.component.scss']
})
export class DrawerImportExcelComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isLoading: boolean;
  @Output() isLoadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() importExcelEmit = new EventEmitter<any>();
  @Output() downloadTemplateExcelEmit = new EventEmitter<any>();
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = [];
  constructor(private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    private translateService: TranslateService) {
    this.files = []
    this.isLoading = false
  }
  ngOnChanges(changes) {
    // if (changes.errorMessage.currentValue == '' || changes.errorMessage.currentValue == 'success') {
    //   this.close()
    // }
    if(!changes.visible.currentValue)
    {
      this.errorMessage=''
      this.files=[]
      this.isLoading = false

    }
  }
  ngOnInit(): void {
  }
  onChangeFile(data: any) {
    // this.fileInput = data

  }
  onSubmit() {
    if (this.files.length > 0) {
      this.isLoading = true
      this.isLoadingChange.emit(this.isLoading);

      this.importExcelEmit.emit(this.files);
    }
    else {
      this.notificationService.showToastr(this.translateService.instant('warning.pleaseInputFile'), 'warning')
    }

  }
  onDownloadTemplate() {
    this.downloadTemplateExcelEmit.emit(this.visible);
  }
  onOpenDrawerImport() {
    this.visible = true
  }
  close() {
    this.visible = false
    this.isLoading = false
    this.isLoadingChange.emit(this.isLoading);
    this.errorMessage=''
    this.files=[]
    this.visibleChange.emit(this.visible)
  }
  onFileDropped(files) {
    if (this.files.length != 0) {
      this.deleteFile(0);
    }
    this.prepareFilesList(files);
  }

  fileBrowseHandler(files) {
    if (this.files.length != 0) {
      this.deleteFile(0);
    }
    this.prepareFilesList(files);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      return;
    }
    this.files.splice(index, 1);
  }
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  uploadFilesSimulator(index: number) {
    if (index === this.files.length) {
      return;
    }
    else {
      const progressInterval = setInterval(() => {
        if (this.files[index].progress === 100) {
          clearInterval(progressInterval);
          this.uploadFilesSimulator(index + 1);
        } else {
          this.files[index].progress += 5;
        }
        this.cd.detectChanges();
      }, 200);
    }
  }
}
