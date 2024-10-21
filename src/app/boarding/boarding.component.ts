import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrl: './boarding.component.scss'
})
export class BoardingComponent implements OnInit {
  currentLang!: string;
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLang = this.languageService.getLang();
  }


}
