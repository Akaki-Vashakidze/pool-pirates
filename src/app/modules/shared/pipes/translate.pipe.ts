import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  translations: any;
  lang: string = 'geo';
  constructor(private _translationService: TranslationService) {
    this.translations = this._translationService.translations;
  }

  transform(value: string, args?: any): any {
    switch (args) {
      case 'eng':
        this.lang = 'eng';
        break;
      case 'rus':
        this.lang = 'rus';
        break;
      case 'geo':
        this.lang = 'geo';
        break;
      default:
        this.lang = 'eng'
    }
    if (!this.translations[value] || !this.translations[value][this.lang]) return value;
    return this.translations[value][this.lang];
  }
}
