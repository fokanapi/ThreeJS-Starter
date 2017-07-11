import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

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
    self.scene.background = new THREE.Color(0xffffff);
    
    self.setCamera();
    self.setCameraControl();

    self.setRenderer();

    document.body.appendChild(self.renderer.domElement);

    self.setMeshes();

  }

  setCamera() {
    let self = this;
    self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    self.camera.position.z = 50;
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

  setMeshes() {
    let self = this;
    // self.addMesh();
    // self.addMesh2();
    //self.addMeshHeart();
    self.addMeshExtrudeHeart();
    self.addMeshExtrudeBoxShape();
    self.addMeshExtrudeArc();
  }

  addMeshExtrudeBoxShape() {
    var length = 12, width = 8;

    var shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, width);
    shape.lineTo(length, width);
    shape.lineTo(length, 0);
    shape.lineTo(0, 0);

    var extrudeSettings = {
      steps: 1,
      amount: 12,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 1
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = -50;
    this.scene.add(mesh);
  }

  addMeshHeart() {
    let self = this;
    var x = 0, y = 0;

    var heartShape = new THREE.Shape();

    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

    var geometry = new THREE.ShapeGeometry(heartShape);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 50;
    self.scene.add(mesh);
  }

  addMeshExtrudeHeart() {
    let self = this;
    var x = 0, y = 0;

    var heartShape = new THREE.Shape();

    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

    var extrudeSettings = {
      steps: 1,
      amount: 2,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 1
    };

    var geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 3;
    mesh.rotation.y = 1;
    mesh.position.x = 50;
    self.scene.add(mesh);
  }


addMeshExtrudeArc() {
    let self = this;
    var x = 0, y = 0;

    var arcShape = new THREE.Shape();

    arcShape.moveTo(2, 2);
    arcShape.bezierCurveTo(2,10,15,10,15,2);
    // arcShape.lineTo(2, 2);

    var extrudeSettings = {
      steps: 1,
      amount: 4,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 1
    };

    var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    self.scene.add(mesh);
  }
  addMesh() {
    let self = this;
    let geometry = new THREE.BoxGeometry(3, 3, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    self.scene.add(cube);
  }

  addMesh2() {
    let self = this;
    let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let cube = new THREE.Mesh(geometry, material);
    self.scene.add(cube);
  }

}

