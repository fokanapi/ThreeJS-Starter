import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-orbit-control',
  templateUrl: './orbit-control.component.html',
  styleUrls: ['./orbit-control.component.css']
})
export class OrbitControlComponent implements AfterViewInit {

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
    //self.mesh.rotation.y += 0.02;

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
    self.camera = new THREE.PerspectiveCamera(45, (window.innerWidth / 2) / window.innerHeight, 1, 1000);
    self.camera.position.z = 100;
    //self.camera.position.set(0, 1, -3)
    self.camera.lookAt(new THREE.Vector3())


    self.geometry = new THREE.BoxGeometry(20, 20, 20);
    self.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    self.mesh = new THREE.Mesh(self.geometry, self.material);
    self.scene.add(self.mesh);

    self.renderer = WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();

    self.renderer.setSize(window.innerWidth / 2, window.innerHeight);

    //new OrbitControls(self.camera, self.renderer.domElement);
    
    var controls = new OrbitControls(self.camera);
    document.body.appendChild(self.renderer.domElement);

  }

}
