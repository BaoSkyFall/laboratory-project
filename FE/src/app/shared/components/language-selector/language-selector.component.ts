import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() styleType: number;
  languageType: string = this.translate.currentLang;

  constructor(public translate: TranslateService, private authService: AuthService) {
    this.styleType = 0;
  }

  ngOnInit(): void {
  }

  onChangeLanguage(key: string) {
    this.translate.use(key).toPromise();
    this.languageType = key;
    this.authService.saveLanguage(key);
    // return;
  }

}
