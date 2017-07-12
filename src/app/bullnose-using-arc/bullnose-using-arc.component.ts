import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);


@Component({
  selector: 'app-bullnose-using-arc',
  templateUrl: './bullnose-using-arc.component.html',
  styleUrls: ['./bullnose-using-arc.component.css']
})
export class BullnoseUsingArcComponent implements OnInit {

  renderer;
  scene;
  camera;
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

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
    self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    self.camera.position.z = 3000;
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

  degreeToRadians(degree: number) {
    return degree * 3.1459 / 180;
  }

  setMeshes() {
    let self = this;
    self.addMesh1();
    self.addMesh2();
    self.addMesh3();
    self.addMesh4();
    self.addMesh5();
    self.addMesh6();
    self.addMesh7();
    self.addMesh8();
    self.addMesh9();
    self.addMesh10();
    self.addMesh11();
    self.addMesh12();
    self.scene.rotation.x = -1;
    self.scene.rotation.z = -1;
  }

  addMesh1() {
    let shape = new THREE.Shape();

    shape.moveTo(770, -19);
    shape.lineTo(1050, -19);
    shape.lineTo(1050, -1078);

    shape.bezierCurveTo(1050, -1178, 948, -1280, 848, -1280);
    //shape.lineTo(848, -1280);

    shape.bezierCurveTo(748, -1280, 645, -1249, 645, -1049);
    //shape.lineTo(847.5, -1280);
    //shape.lineTo(645, -1077.5);

    shape.lineTo(645, -1049);
    shape.lineTo(770, -1049);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 180);

    this.scene.add(mesh);
  }

  addMesh2() {
    let shape = new THREE.Shape();

    shape.moveTo(1020, -1078);
    shape.bezierCurveTo(1020, -1178, 948, -1250, 848, -1250);
    //*shape.lineTo(848, -1250);
    // shape.lineTo(847.5, -1250);

    shape.bezierCurveTo(748, -1250, 675, -1227.5, 675, -1077.5);
    //*shape.lineTo(675, -1077.5);

    shape.lineTo(675, -1049);

    // shape.lineTo(693, -1049);
    // shape.lineTo(693, -1077.5);

    shape.bezierCurveTo(675, -1149, 675, -1249, 848, -1232);
    // shape.lineTo(847.5, -1232);
    // shape.lineTo(848, -1232);

    shape.bezierCurveTo(948, -1232, 1002, -1178, 1002, -1078);
    //shape.lineTo(1002, -1078);

    shape.lineTo(1002, -19);

    shape.lineTo(1020, -19);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -159 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 159);

    this.scene.add(mesh);
  }

  addMesh3() {
    let shape = new THREE.Shape();

    shape.moveTo(520, -1031);
    shape.lineTo(520, -19);
    shape.lineTo(800, -19);
    shape.lineTo(800, -1031);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 360);

    this.scene.add(mesh);
  }

  addMesh4() {
    let shape = new THREE.Shape();

    shape.moveTo(770, -1031);
    shape.lineTo(752, -1031);
    shape.lineTo(752, -19);
    shape.lineTo(770, -19);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -185 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 339);

    this.scene.add(mesh);
  }

  addMesh5() {
    let shape = new THREE.Shape();

    shape.moveTo(270, -1031);
    shape.lineTo(270, -19);
    shape.lineTo(550, -19);
    shape.lineTo(550, -1031);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 540);

    this.scene.add(mesh);
  }

  addMesh6() {
    let shape = new THREE.Shape();

    shape.moveTo(520, -1031);
    shape.lineTo(502, -1031);
    shape.lineTo(502, -19);
    shape.lineTo(520, -19);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -185 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 519);

    this.scene.add(mesh);
  }

  addMesh7() {
    let shape = new THREE.Shape();

    shape.moveTo(20, -1031);
    shape.lineTo(20, -19);
    shape.lineTo(300, -19);
    shape.lineTo(300, -1031);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 720);

    this.scene.add(mesh);
  }

  addMesh8() {
    let shape = new THREE.Shape();

    shape.moveTo(270, -1031);
    shape.lineTo(252, -1031);
    shape.lineTo(252, -19);
    shape.lineTo(270, -19);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -185 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 699);

    this.scene.add(mesh);
  }

  addMesh9() {
    let shape = new THREE.Shape();

    shape.moveTo(0, -1031);
    shape.lineTo(0, -19);
    shape.lineTo(50, -19);
    shape.lineTo(50, -1031);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 900);

    this.scene.add(mesh);
  }

  addMesh10() {
    let shape = new THREE.Shape();

    shape.moveTo(20, -1031);
    shape.lineTo(2, -1031);
    shape.lineTo(2, -19);
    shape.lineTo(20, -19);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -185 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 879);

    this.scene.add(mesh);
  }

  addMesh11() {
    let shape = new THREE.Shape();

    shape.moveTo(805, -390.25);
    shape.lineTo(805, -51.39);
    shape.lineTo(0, -630.99);
    shape.lineTo(0, -900);
    shape.lineTo(-50, -900);
    shape.lineTo(-50, -965);
    shape.lineTo(6.24, -965);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -33 }), this.material);
    mesh.rotation.set(this.degreeToRadians(-90), 0, 0, "ZYX");
    mesh.position.set(0, -1017, 0);

    this.scene.add(mesh);
  }

  addMesh12() {
    let shape = new THREE.Shape();

    shape.moveTo(1085, -188.65);
    shape.lineTo(1085, 0);
    shape.lineTo(876.37, 0);
    shape.lineTo(0, -630.99);
    shape.lineTo(0, -900);
    shape.lineTo(-50, -900);
    shape.lineTo(-50, -965);
    shape.lineTo(6.74, -965);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -33 }), this.material);
    mesh.rotation.set(this.degreeToRadians(-90), 0, 0, "ZYX");
    mesh.position.set(0, 0, 0);

    this.scene.add(mesh);
  }

  addMeshBase() {
    let shape = new THREE.Shape();

    shape.moveTo(1085, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);
    shape.lineTo(0, -0);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: 33 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 0);

    this.scene.add(mesh);
  }


}
