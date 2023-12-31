import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, tap } from 'rxjs';
import LocalTranslations from '../utils/local-translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private langSrc: BehaviorSubject<string>;

  readonly lang: Observable<string>;

  allTranslations: any[] = [];
  public translations: any = {};

  constructor() {
    this.langSrc = new BehaviorSubject(localStorage.getItem('lang') || 'geo');
    this.lang = this.langSrc.asObservable();
    this.loadTranslations();
  }

  async loadTranslations() {
    this.allTranslations = [...LocalTranslations];
    this.allTranslations.forEach(tr => this.translations[tr.keyword] = tr.translations)
  }

  public translate(keyword: string) {
    return this.translations[keyword] && this.translations[keyword][this.currentLang] ? this.translations[keyword][this.currentLang] : keyword;
  }

  get currentLang() {
    return localStorage.getItem('lang') || 'geo'
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.langSrc.next(lang)
  }

}
