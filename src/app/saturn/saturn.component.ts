import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SaturnService } from './saturn.service';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html'
})
export class SaturnComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: SaturnService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
