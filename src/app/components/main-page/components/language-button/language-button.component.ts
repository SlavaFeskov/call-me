import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent implements OnInit {
  @Input() language!: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  public imagePath?: string = undefined;

  ngOnInit(): void {
    this.imagePath = `./images/${this.language.toLowerCase()}.png`;
  }

  public onButtonClick(): void{
    this.buttonClick.emit(this.language);
  }
}
