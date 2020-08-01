import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NeptuneService } from './neptune.service';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.component.html'
})
export class NeptuneComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: NeptuneService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
