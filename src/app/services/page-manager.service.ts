import { Injectable } from "@angular/core";
import { Page } from "../enums/page";

[Injectable({ providedIn: "root" })]
export class PageManagerService {
    private _activePage: Page = Page.Main;
    private _selectedLanguage: string = "";

    public get activePage(): Page {
        return this._activePage;
    }

    public get selectedLanguage(): string {
        return this._selectedLanguage;
    }

    public setLanguage(language: string): void {
        this._selectedLanguage = language;
        this._activePage = Page.Call;
    }

    public goToCredits(): void {
        this._activePage = Page.Credits;
    }

    public reset(): void {
        this._activePage = Page.Main;
    }
}