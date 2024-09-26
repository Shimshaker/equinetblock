import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  currentLang!: string;

  constructor(private router: Router) {
    const langFromUrl = this.router.url.split('/')[2];
    this.currentLang = langFromUrl || 'fr';

   }

  setLang(newLang: string) {
    window.location.href = `/${newLang}`;
  }

  getLang(): string {
    return this.currentLang;
  }


}
