import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {
  audio: HTMLAudioElement;
  isPlaying: boolean = true;

  constructor() {
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/aot-bg.mp3'
    this.audio.load();
    this.audio.loop = true;
    this.isPlaying = false;
  }
  ngOnInit(): void {

  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
