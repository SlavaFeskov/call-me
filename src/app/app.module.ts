import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LanguageSelectorComponent } from './components/main-page/components/language-selector/language-selector.component';
import { LanguageButtonComponent } from './components/main-page/components/language-button/language-button.component';
import { PageManagerComponent } from './components/page-manager/page-manager.component';
import { PageManagerService } from './services/page-manager.service';
import { IncomingCallPageComponent } from './components/incoming-call-page/incoming-call-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditsPageComponent } from './components/credits-page/credits-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LanguageSelectorComponent,
    LanguageButtonComponent,
    PageManagerComponent,
    IncomingCallPageComponent,
    CreditsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [PageManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
