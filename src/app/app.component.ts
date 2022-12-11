import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CumpleJon';

  @Input() codigo: string = '';

  codigoSolucion: string = '735';

  audio: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;  
  isCorrecto: boolean = false;
  isCheckeado: boolean = false;

  constructor(){

  }
  
  play(){    
    this.audio.src = "../assets/audio/audio.mp3";
    this.audio.load();
    this.isPlaying = true;
    this.audio.play();
  }

  pause(){
    this.isPlaying = false;
    this.audio.pause();
  }

  clear(){
    this.codigo = '';
    this.isCheckeado = false;
    this.isCorrecto = false;
  }

  check(){
    this.isCheckeado = true;
    this.isCorrecto = this.esCodigoCorrecto();
  }

  esCodigoCorrecto(): boolean {
    return this.codigo === this.codigoSolucion;
  }
}
