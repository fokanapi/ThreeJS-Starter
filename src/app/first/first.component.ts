import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements AfterViewInit {

  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;
  
  constructor() { }

  animate: any = () => {
    let self = this;
    requestAnimationFrame(self.animate);

    //self.mesh.rotation.x += 0.01;
    self.mesh.rotation.y += 0.02;

    self.renderer.render(self.scene, self.camera);
    
  }

  ngAfterViewInit() {
    this.init();
    this.animate();
    console.log(this.scene);
  }


  init() {
    let self = this;
    self.scene = new THREE.Scene();
    //Camera perpective usually 35-45
    self.camera = new THREE.PerspectiveCamera(45, (window.innerWidth/2) / window.innerHeight, 1, 1000);
    self.camera.position.z = 100;
    self.geometry = new THREE.BoxGeometry(20, 20, 20);
    self.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    self.mesh = new THREE.Mesh(self.geometry, self.material);
    self.scene.add(self.mesh);

    self.renderer = WebGLRenderingContext ? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
  
    self.renderer.setSize(window.innerWidth/2, window.innerHeight);

    document.body.appendChild(self.renderer.domElement);

  }


}
