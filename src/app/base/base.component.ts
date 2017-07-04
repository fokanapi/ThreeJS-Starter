import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  renderer;
  scene;
  camera;
  animate = () => {
    let self = this;
    requestAnimationFrame(self.animate);
    self.renderer.render(self.scene, self.camera);
  }

  constructor() { }

  ngOnInit() {
    let self = this;

    self.initScene();
    self.animate();
  }

  initScene() {
    let self = this;
    self.scene = new THREE.Scene();
    
    self.setCamera();
    self.setCameraControl();
    
    self.setRenderer();

    document.body.appendChild(self.renderer.domElement);

    self.setMeshes();

  }

  setCamera() {
    let self = this;
    self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    self.camera.position.z = 5;
  }

  setCameraControl() {
    let self = this;
    new OrbitControls(self.camera);
  }

  setRenderer() {
    let self = this;
    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setMeshes(){
    let self = this;
    self.addMesh();
    self.addMesh2();
  }

  addMesh(){
    let self = this;
    let geometry = new THREE.BoxGeometry(3, 3, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    self.scene.add(cube);
  }

  addMesh2(){
    let self = this;
    let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let cube = new THREE.Mesh(geometry, material);
    self.scene.add(cube);
  }

}
