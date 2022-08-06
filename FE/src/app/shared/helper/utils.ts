import { AbstractControl, FormGroup } from '@angular/forms';

export default class Utils {
  static isAcceptFileSize(file: File, maxSize: number) {
    const isAcceptFileSize = file.size! / 1024 / 1024 < maxSize;
    return isAcceptFileSize;
  }

  static isAcceptFileType(file: File, listType: string[]) {
    const isAcceptFileType = listType.includes(file.type);
    return isAcceptFileType;
  }

  static validateAllFormFields(group: FormGroup) {
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
      group.controls[i].updateValueAndValidity();
    }
  }
  static resetForm(formGroup: FormGroup) {
    let control: AbstractControl;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
  static getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  static getDateFarFromCurrentDate(date: number) {
    return new Date().setDate(new Date().getDate() + date);
  }

  static getDatePriorToCurrentDate(date: number) {
    return new Date().setDate(new Date().getDate() - date);
  }
  static download(data: any, fileName: string) {
    let binaryData = [];
    binaryData.push(data);

    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: data.type }));
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
