import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PageManagerService } from 'src/app/services/page-manager.service';

@Component({
  selector: 'app-incoming-call-page',
  templateUrl: './incoming-call-page.component.html',
  styleUrls: ['./incoming-call-page.component.scss'],
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        animate('0.5s ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class IncomingCallPageComponent implements OnInit, OnDestroy {
  private ellapsedCallSeconds = 0;
  private timer: any;
  private incommingCallAudio?: HTMLAudioElement = undefined;
  private speakAudio?: HTMLAudioElement = undefined;

  public callAccepted: boolean = false;
  public timerText: string = "00:00:00";

  constructor(private pageManagerService: PageManagerService) { }

  public ngOnInit(): void {
    this.incommingCallAudio = new Audio();
    this.incommingCallAudio.src = "./assets/audio/taskCompleted.mp3";
    this.incommingCallAudio.loop = true;
    this.incommingCallAudio.load();
    this.incommingCallAudio.play();

    this.speakAudio = new Audio();
    this.speakAudio.src = `./assets/audio/${this.pageManagerService.selectedLanguage}.mp3`;
    this.speakAudio.loop = true;
    this.speakAudio.load();
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
    this.incommingCallAudio?.pause();
    this.speakAudio?.pause();
  }

  public onCallDecline(): void {
    this.pageManagerService.goToCredits();
  }

  public onCallAccept(): void {
    this.callAccepted = true;

    this.incommingCallAudio?.pause();
    this.speakAudio?.play();

    this.timer = setInterval(() => {
      this.ellapsedCallSeconds++;
      this.timerText = moment.utc(this.ellapsedCallSeconds * 1000).format('HH:mm:ss');
    }, 1000);
  }
}
