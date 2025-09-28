import { Component } from '@angular/core';
import { HlsjsPlyrDriver } from './hlsjs-plyr-driver';
import Plyr from 'plyr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  player: Plyr;
  hlsDriver: HlsjsPlyrDriver = new HlsjsPlyrDriver(false);

  options: Plyr.Options = {
    autoplay: true,
    invertTime: false,
    disableContextMenu: true,
    fullscreen: true,
    settings: ['quality', 'speed', 'loop'],
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'settings',
      'fullscreen',
      'pip',
      'airplay',
    ],
    captions: { active: true, update: true, language: 'en' },
  };

  poster = 'https://bitdash-a.akamaihd.net/content/sintel/poster.png';
  sources: Plyr.Source[] = [
    {
      src: 'https://hugh.cdn.rumble.cloud/live/v0xi25uh/slot-123/k5c9-6hwd/chunklist_DVR.m3u8',
      type: 'video',
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);

    this.hlsDriver.load(this.sources[0].src);
  }
}
