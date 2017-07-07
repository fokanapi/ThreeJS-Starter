import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-fcmacro',
  templateUrl: './fcmacro.component.html',
  styleUrls: ['./fcmacro.component.css']
})
export class FcmacroComponent implements OnInit {

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
    self.addMeshStairs1();
    self.addMeshStairs2();
    self.addMeshStairs3();
    self.addMeshStairs4();
    self.addMeshStairs5();
    self.addMeshStairs6();
    self.addMeshStairs7();
    self.addMeshStairs8();
    self.addMeshStairs9();
    self.addMeshStairs10();
    self.addMeshStairs11();
    self.addMeshStairs12();
    self.addMeshStairs13();
    self.addMeshStairs14();
    self.addMeshStairs15();
    self.addMeshStairs16();
    self.addMeshStairs17();
    self.addMeshStairs18();
    self.addMeshStairs19();
    self.addMeshStairs20();
    self.addMeshStairs21();
    self.addMeshStairs22();
    self.addMeshStairs23();
    self.addMeshStairs24();
    self.addMeshStairs25();
    self.addMeshStairs26();
    self.addMeshStairs27();
    self.addMeshStairs28();
  }

  addMeshStairs1() {
    var shape = new THREE.Shape();
    shape.moveTo(1050, -19);
    shape.lineTo(1050, -1009.5);
    shape.lineTo(996, -1009.5);
    shape.lineTo(996, -1031);
    shape.lineTo(770, -1031);
    shape.lineTo(770, -19);
    shape.lineTo(1050, -19);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 154;
    this.scene.add(mesh);
  }

  addMeshStairs2() {
    var shape = new THREE.Shape();

    shape.moveTo(1020, -1009.5);
    shape.lineTo(1002, -1009.5);
    shape.lineTo(1002, -19);
    shape.lineTo(1020, -19);
    shape.lineTo(1020, -1009.5);

    var extrudeSettings = {
      steps: 1,
      amount: 159,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs3() {
    var shape = new THREE.Shape();

    shape.moveTo(520, -1031);
    shape.lineTo(520, -19);
    shape.lineTo(800, -19);
    shape.lineTo(800, -1031);
    shape.lineTo(520, -1031);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 334;
    this.scene.add(mesh);
  }

  addMeshStairs4() {
    var shape = new THREE.Shape();

    shape.moveTo(770, -1031);
    shape.lineTo(752, -1031);
    shape.lineTo(752, -19);
    shape.lineTo(770, -19);
    shape.lineTo(770, -1031);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 154;
    this.scene.add(mesh);
  }

  addMeshStairs5() {
    var shape = new THREE.Shape();

    shape.moveTo(270, -1031);
    shape.lineTo(270, -19);
    shape.lineTo(550, -19);
    shape.lineTo(550, -1031);
    shape.lineTo(270, -1031);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 514;
    this.scene.add(mesh);
  }

  addMeshStairs6() {
    var shape = new THREE.Shape();

    shape.moveTo(520, -1031);
    shape.lineTo(502, -1031);
    shape.lineTo(502, -19);
    shape.lineTo(520, -19);
    shape.lineTo(520, -1031);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 334;
    this.scene.add(mesh);
  }

  addMeshStairs7() {
    var shape = new THREE.Shape();

    shape.moveTo(300, -19);
    shape.lineTo(300, -1031);
    shape.lineTo(44, -1031);
    shape.lineTo(44, -1009.5);
    shape.lineTo(20, -1009.5);
    shape.lineTo(20, -19);
    shape.lineTo(300, -19);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 694;
    this.scene.add(mesh);
  }

  addMeshStairs8() {
    var shape = new THREE.Shape();

    shape.moveTo(270, -1031);
    shape.lineTo(252, -1031);
    shape.lineTo(252, -19);
    shape.lineTo(270, -19);
    shape.lineTo(270, -1031);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 514;
    this.scene.add(mesh);
  }

  addMeshStairs9() {
    var shape = new THREE.Shape();

    shape.moveTo(50, -19);
    shape.lineTo(50, -1009.5);
    shape.lineTo(0, -1009.5);
    shape.lineTo(0, -19);
    shape.lineTo(50, -19);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 874;
    this.scene.add(mesh);
  }

  addMeshStairs10() {
    var shape = new THREE.Shape();

    shape.moveTo(20, -1009.5);
    shape.lineTo(2, -1009.5);
    shape.lineTo(2, -19);
    shape.lineTo(20, -19);
    shape.lineTo(20, -1009.5);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 694;
    this.scene.add(mesh);
  }

  addMeshStairs11() {
    var shape = new THREE.Shape();

    shape.moveTo(-24, -989.5);
    shape.lineTo(-24, -1077.5);
    shape.lineTo(64, -1077.5);
    shape.lineTo(64, -989.5);
    shape.lineTo(-24, -989.5);

    var extrudeSettings = {
      steps: 1,
      amount: 1420.09,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 544.91;
    this.scene.add(mesh);
  }

  addMeshStairs12() {
    var shape = new THREE.Shape();

    shape.moveTo(976, -989.5);
    shape.lineTo(976, -1077.5);
    shape.lineTo(1064, -1077.5);
    shape.lineTo(1064, -989.5);
    shape.lineTo(976, -989.5);

    var extrudeSettings = {
      steps: 1,
      amount: 1258.28,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs13() {
    var shape = new THREE.Shape();

    shape.moveTo(1006, -225.13);
    shape.lineTo(1006, 0);
    shape.lineTo(876.37, 0);
    shape.lineTo(64, -584.91);
    shape.lineTo(64, -619.91);
    shape.lineTo(34, -619.91);
    shape.lineTo(34, -881.77);
    shape.lineTo(64, -881.77);
    shape.lineTo(64, -923.77);
    shape.lineTo(976, -267.13);
    shape.lineTo(976, -225.13);
    shape.lineTo(1006, -225.13);

    var extrudeSettings = {
      steps: 1,
      amount: -33,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(this.degreeToRadians(-90));

    mesh.position.x = 0;
    mesh.position.y = -1017;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs14() {
    var shape = new THREE.Shape();

    shape.moveTo(1085, -188.65);
    shape.lineTo(1085, 0);
    shape.lineTo(876.37, 0);
    shape.lineTo(0, -630.99);
    shape.lineTo(0, -900);
    shape.lineTo(-50, -900);
    shape.lineTo(-50, -965);
    shape.lineTo(6.74, -965);
    shape.lineTo(1085, -188.65);

    var extrudeSettings = {
      steps: 1,
      amount: -33,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs15() {
    var shape = new THREE.Shape();

    shape.moveTo(-956, -1864.92);
    shape.lineTo(-44, -1208.28);
    shape.lineTo(-44, -1156.53);
    shape.lineTo(-956, -1813.17);
    shape.lineTo(-956, -1864.92);

    var extrudeSettings = {
      steps: 1,
      amount: -65,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 1020;
    mesh.position.y = -1001;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs16() {
    var shape = new THREE.Shape();

    shape.moveTo(-956, -961.97);
    shape.lineTo(-44, -305.33);
    shape.lineTo(-44, -267.13);
    shape.lineTo(-956, -923.77);
    shape.lineTo(-956, -961.97);

    var extrudeSettings = {
      steps: 1,
      amount: -88,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 1020;
    mesh.position.y = -989.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs17() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -375.71);
    shape.lineTo(0, -1255.26);
    shape.lineTo(12, -1263.9);
    shape.lineTo(12, -384.35);
    shape.lineTo(0, -375.71);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 856;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs18() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -375.71);
    shape.lineTo(0, -1255.26);
    shape.lineTo(12, -1263.9);
    shape.lineTo(12, -384.35);
    shape.lineTo(0, -375.71);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 856;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs19() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -470.75);
    shape.lineTo(0, -1350.3);
    shape.lineTo(12, -1358.94);
    shape.lineTo(12, -479.39);
    shape.lineTo(0, -470.75);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 724;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs20() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -470.75);
    shape.lineTo(0, -1350.3);
    shape.lineTo(12, -1358.94);
    shape.lineTo(12, -479.39);
    shape.lineTo(0, -470.75);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 724;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs21() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -565.79);
    shape.lineTo(0, -1445.33);
    shape.lineTo(12, -1453.97);
    shape.lineTo(12, -574.43);
    shape.lineTo(0, -565.79);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 592;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs22() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -565.79);
    shape.lineTo(0, -1445.33);
    shape.lineTo(12, -1453.97);
    shape.lineTo(12, -574.43);
    shape.lineTo(0, -565.79);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 592;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs23() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -660.83);
    shape.lineTo(0, -1540.37);
    shape.lineTo(12, -1549.01);
    shape.lineTo(12, -669.47);
    shape.lineTo(0, -660.83);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 460;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs24() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -660.83);
    shape.lineTo(0, -1540.37);
    shape.lineTo(12, -1549.01);
    shape.lineTo(12, -669.47);
    shape.lineTo(0, -660.83);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 460;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;

    this.scene.add(mesh);
  }

  addMeshStairs25() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -755.87);
    shape.lineTo(0, -1635.41);
    shape.lineTo(12, -1644.05);
    shape.lineTo(12, -764.51);
    shape.lineTo(0, -755.87);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 328;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs26() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -755.87);
    shape.lineTo(0, -1635.41);
    shape.lineTo(12, -1644.05);
    shape.lineTo(12, -764.51);
    shape.lineTo(0, -755.87);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 328;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs27() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -850.91);
    shape.lineTo(0, -1730.45);
    shape.lineTo(12, -1739.09);
    shape.lineTo(12, -859.55);
    shape.lineTo(0, -850.91);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 196;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs28() {
    var shape = new THREE.Shape();

    shape.moveTo(0, -850.91);
    shape.lineTo(0, -1730.45);
    shape.lineTo(12, -1739.09);
    shape.lineTo(12, -859.55);
    shape.lineTo(0, -850.91);

    var extrudeSettings = {
      steps: 1,
      amount: -12,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(this.degreeToRadians(-180));
    mesh.rotateX(this.degreeToRadians(-90));
    mesh.position.x = 196;
    mesh.position.y = -1039.5;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }


}

