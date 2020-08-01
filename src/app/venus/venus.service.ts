import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VenusService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.DirectionalLight;

  private sphere: THREE.Mesh;
  private stars: THREE.Mesh;
  private clouds: THREE.Mesh;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 0.01, 1000
    );
    this.camera.position.z = 1.5;
    this.scene.add(this.camera);

    // soft white light
      this.scene.add(new THREE.AmbientLight(0x333333));

    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(5,3,5);
    this.scene.add(this.light);
    var radius   = 0.5,
    segments = 32,
    rotation = 6;  

     this.sphere = this.createSphere(radius, segments);
     this.sphere.rotation.y = rotation; 
     this.scene.add(this.sphere);
     this.clouds = this.createClouds(radius, segments);
    this.clouds.rotation.y = rotation;
     //this.scene.add(this.clouds);

     this.stars = this.createStars(90, 64);
      this.scene.add(this.stars);

    /*const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);*/

  }

    public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.sphere.rotation.y += 0.0005;
    this.clouds.rotation.y += 0.0005;  

    //this.cube.rotation.x += 0.01;
   // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  
  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }


  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

    createSphere(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, segments),
      new THREE.MeshPhongMaterial({
        map:         THREE.ImageUtils.loadTexture('assets/images/venusmap.jpg'),
        //bumpMap:     THREE.ImageUtils.loadTexture('assets/images/venusbump.jpg'),
        bumpScale:   0.005,
        //specularMap: THREE.ImageUtils.loadTexture('assets/images/water_4k.png'),
        specular:    new THREE.Color('grey')              
      })
    );
  }

 createClouds(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius + 0.003, segments, segments),      
      new THREE.MeshPhongMaterial({
        map:         THREE.ImageUtils.loadTexture('assets/images/fair_clouds_4k.png'),
        transparent: true
      })
    );    
  }

  createStars(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, segments), 
      new THREE.MeshBasicMaterial({
        map:  THREE.ImageUtils.loadTexture('assets/images/galaxy_starfield.png'), 
        side: THREE.BackSide
      })
    );
  }


}
