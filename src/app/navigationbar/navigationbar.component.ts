import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.scss'
})
export class NavigationbarComponent implements OnInit {
  currentLang!: string;
  selectedItem!: string;
  defaultItem: string = "FR"
  
  constructor(private route: ActivatedRoute, private router:Router, private languageService: LanguageService) {}


  ngOnInit(): void {
    this.currentLang = this.languageService.getLang();
  }

  changeLanguage(lang: string) {
    let langPrefix = lang.slice(-2);
    this.languageService.setLang(lang);
    this.currentLang = lang;

    this.selectedItem = langPrefix;
  }

  closeMenu(){
    const navbarCollapse = document.getElementById('navbarSupportedContent') as HTMLElement
    if(navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

}
