import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EarthService } from './earth.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html'
})
export class EarthComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EarthService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
