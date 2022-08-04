import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageGenerateByGender',
})
export class ImageGenerateByGenderPipe implements PipeTransform {
  imageDataBoy = ['001-boy.svg', '004-boy-1.svg', '007-boy-2.svg', '008-boy-3.svg', '009-boy-4.svg', '011-boy-5.svg', '015-boy-6.svg', '016-boy-7.svg', '021-boy-8.svg',
    '024-boy-9.svg', '026-boy-10.svg', '029-boy-11.svg', '031-boy-12.svg', '032-boy-13.svg', '034-boy-14.svg', '035-boy-15.svg', '038-boy-16.svg', '043-boy-18.svg',
  ]
  //18
  imageDataGirl = ['002-girl.svg', '003-girl-1.svg', '005-girl-2.svg', '006-girl-3.svg', '010-girl-4.svg', '012-girl-5.svg', '013-girl-6.svg', '014-girl-7.svg', '017-girl-8.svg',
    '018-girl-9.svg', '019-girl-10.svg', '020-girl-11.svg', '022-girl-12.svg', '023-girl-13.svg', '025-girl-14.svg', '027-girl-15.svg', '028-girl-16.svg', '030-girl-17.svg', '033-girl-18.svg',
    '036-girl-19.svg', '037-girl-20.svg', '039-girl-21.svg'];
  //22
  strUrl = './assets/media/svg/avatars/';

  generateImageByKey(gender: boolean, key: string) {
    const arrImg = gender ? this.imageDataBoy : this.imageDataGirl;
    let lengthKey = key.length;
    let indexArrImg = 0;
    while (lengthKey >= 0) {
      indexArrImg = lengthKey;
      lengthKey = lengthKey - arrImg.length
    }

    return this.strUrl + arrImg[indexArrImg]

  }
  transform(value: boolean, key: string, args?: any): string {
    let urlImage: string = './assets/media/svg/avatars/001-boy.svg';

    return this.generateImageByKey(value, key);
  }
}
