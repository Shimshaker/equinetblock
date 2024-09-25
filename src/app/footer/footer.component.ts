import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentLang!: string;

  constructor(private route: ActivatedRoute, private router:Router, private languageService: LanguageService) {}


  ngOnInit(): void {
    this.currentLang = this.languageService.getLang();
  }


}
