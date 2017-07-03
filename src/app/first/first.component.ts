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
  }


  init() {
    let self = this;
    self.scene = new THREE.Scene();

    self.camera = new THREE.PerspectiveCamera(100, (window.innerWidth/2) / window.innerHeight, 1, 1000);
    self.camera.position.z = 500;
    self.geometry = new THREE.BoxGeometry(100, 30, 200);
    self.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    self.mesh = new THREE.Mesh(self.geometry, self.material);
    self.scene.add(self.mesh);

    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize(window.innerWidth/2, window.innerHeight);

    document.body.appendChild(self.renderer.domElement);

  }


}
