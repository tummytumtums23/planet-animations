import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VenusService } from './venus.service';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html'
})
export class VenusComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: VenusService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
