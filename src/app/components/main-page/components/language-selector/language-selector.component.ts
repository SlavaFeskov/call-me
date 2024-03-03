import { Component } from '@angular/core';
import { PageManagerService } from 'src/app/services/page-manager.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(private pageManagerService: PageManagerService) { }

  public onButtonClick(language: string): void {
    this.pageManagerService.setLanguage(language);
  }
}
