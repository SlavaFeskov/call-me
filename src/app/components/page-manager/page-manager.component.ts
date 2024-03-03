import { trigger, transition, animate, style } from '@angular/animations';
import { Component } from '@angular/core';
import { Page } from 'src/app/enums/page';
import { PageManagerService } from 'src/app/services/page-manager.service';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 0.3s ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0.5s 0.3s ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('slideOut', [
      transition(':leave', [
        animate('0.5s 0.3s ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class PageManagerComponent {
  public pageEnum = Page;

  constructor(public pageManagerService: PageManagerService) { }
}
