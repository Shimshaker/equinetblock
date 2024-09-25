import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  currentLang!: string;

  constructor(private router: Router) {
    const langFromUrl = this.router.url.split('/')[1];
    this.currentLang = langFromUrl || 'fr';

   }

   setLang(lang: string) {
    this.currentLang = lang;

    this.router.navigate([`/${lang}`]);
   
  }

  getLang(): string {
    return this.currentLang;
  }


}
