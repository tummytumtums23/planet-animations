import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JupiterService } from './jupiter.service';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html'
})
export class JupiterComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: JupiterService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}