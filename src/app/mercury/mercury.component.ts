import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MercuryService } from './mercury.service';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html'
})
export class MercuryComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: MercuryService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
