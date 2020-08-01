import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarsService } from './mars.service';


@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html'
})
export class MarsComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: MarsService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();

}
}