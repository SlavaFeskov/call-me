import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageManagerService } from './services/page-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isVerticalScreen: boolean = false;

  constructor(private _pageManagerService: PageManagerService) {}

  public ngOnInit(): void {
    window.addEventListener('resize', () => this.handleWindowResize());
    this.handleWindowResize();
  }

  public ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.handleWindowResize());
  }

  private handleWindowResize(): void {
    this.isVerticalScreen = window.innerWidth / window.innerHeight <= 1;

    if (!this.isVerticalScreen) {
      this._pageManagerService.reset();
    }
  }
}
