import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-straight-with-bullnose',
  templateUrl: './straight-with-bullnose.component.html',
  styleUrls: ['./straight-with-bullnose.component.css']
})
export class StraightWithBullnoseComponent implements OnInit {

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
    //self.renderer = new THREE.CanvasRenderer();
    self.renderer = new THREE.WebGLRenderer({antialias: true});
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
    // self.addMeshStairs21();
    // self.addMeshStairs22();
    // self.addMeshStairs23();
    // self.addMeshStairs24();
    // self.addMeshStairs25();
    // self.addMeshStairs26();
    // self.addMeshStairs27();
    // self.addMeshStairs28();
    // self.addMeshStairs29();
    // self.addMeshStairs30();
  }

  addMeshStairs1() {
    var shape = new THREE.Shape();
   
shape.moveTo(1050,-1009.5);
	shape.lineTo(996,-1009.5);
	shape.lineTo(996,-1031);
	shape.lineTo(770,-1031);
	shape.lineTo(770,-19);
	shape.lineTo(996,-19);
	shape.lineTo(996,-40.5);
	shape.lineTo(1050,-40.5);
	shape.lineTo(1050,-1009.5);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1414;
    
    this.scene.add(mesh);
  }

  addMeshStairs2() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
    shape.moveTo(1020,-1009.5);
	shape.lineTo(1002,-1009.5);
	shape.lineTo(1002,-40.5);
	shape.lineTo(1020,-40.5);
	shape.lineTo(1020,-1009.5);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1234;
    
    this.scene.add(mesh);
  }

  addMeshStairs3() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(520,-1031);
	shape.lineTo(520,-19);
	shape.lineTo(800,-19);
	shape.lineTo(800,-1031);
	shape.moveTo(520,-1031);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1594;
    
    this.scene.add(mesh);
  }

  addMeshStairs4() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(770,-1031);
	shape.lineTo(752,-1031);
	shape.lineTo(752,-19);
	shape.lineTo(770,-19);
	shape.lineTo(770,-1031);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1414;
    
    this.scene.add(mesh);
  }

  addMeshStairs5() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(270,-1031);
	shape.lineTo(270,-19);
	shape.lineTo(550,-19);
	shape.lineTo(550,-1031);
	shape.lineTo(270,-1031);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1774;
    
    this.scene.add(mesh);
  }

  addMeshStairs6() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(520,-1031);
	shape.lineTo(502,-1031);
	shape.lineTo(502,-19);
	shape.lineTo(520,-19);
	shape.lineTo(520,-1031);

    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1594;
    
    this.scene.add(mesh);
  }

  addMeshStairs7() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(300,-1031);
	shape.lineTo(44,-1031);
	shape.lineTo(44,-1009.5);
	shape.lineTo(20,-1009.5);
	shape.lineTo(20,-40.5);
	shape.lineTo(44,-40.5);
	shape.lineTo(44,-19);
	shape.lineTo(300,-19);
	shape.lineTo(300,-1031);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1954;
    
    this.scene.add(mesh);
  }

  addMeshStairs8() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(270,-1031);
	shape.lineTo(252,-1031);
	shape.lineTo(252,-19);
	shape.lineTo(270,-19);
	shape.lineTo(270,-1031);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1774;
    
    this.scene.add(mesh);
  }

  addMeshStairs9() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(50,-1009.5);
	shape.lineTo(0,-1009.5);
	shape.lineTo(0,-40.5);
	shape.lineTo(50,-40.5);
	shape.lineTo(50,-1009.5);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 2134;
    
    this.scene.add(mesh);
  }

  addMeshStairs10() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(20,-1009.5);
	shape.lineTo(2,-1009.5);
	shape.lineTo(2,-40.5);
	shape.lineTo(20,-40.5);
	shape.lineTo(20,-1009.5);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1954;
    
    this.scene.add(mesh);
  }

  addMeshStairs11() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-24,-989.5);
	shape.lineTo(-24,-1077.5);
	shape.lineTo(64,-1077.5);
	shape.lineTo(64,-989.5);
	shape.lineTo(-24,-989.5);
    var extrudeSettings = {
      steps: 1,
      amount: 1420.09,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1804.91;
    
    this.scene.add(mesh);
  }

  addMeshStairs12() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-24,-60.5);
	shape.lineTo(-24,27.5);
	shape.lineTo(64,27.5);
	shape.lineTo(64,-60.5);
	shape.lineTo(-24,-60.5);
    var extrudeSettings = {
      steps: 1,
      amount: 1420.09,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1804.91;
    
    this.scene.add(mesh);
  }

  addMeshStairs13() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(24,-1063.5);
	shape.lineTo(24,-1019.64);
	shape.lineTo(1014.5,-447.78);
	shape.lineTo(1014.5,-1009.5);
	shape.lineTo(993,-1009.5);
	shape.lineTo(993,-1063.5);
	shape.lineTo(24,-1063.5);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 874;
    
    this.scene.add(mesh);
  }

  addMeshStairs14() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(24,-1033.5);
	shape.lineTo(24,-1015.5);
	shape.lineTo(993,-1015.5);
	shape.lineTo(993,-1033.5);
	shape.lineTo(24,-1033.5);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 694;
    
    this.scene.add(mesh);
  }

  addMeshStairs15() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(24,-1054.28);
	shape.lineTo(24,-1009.5);
	shape.lineTo(13.86,-1009.5);
	shape.lineTo(585.72,-19);
	shape.lineTo(993,-19);
	shape.lineTo(993,-40.5);
	shape.lineTo(1014.5,-40.5);
	shape.lineTo(1014.5,-482.42);
	shape.lineTo(24,-1054.28);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 1054;
    
    this.scene.add(mesh);
  }

  addMeshStairs16() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(24,-1019.64);
	shape.lineTo(24,-998.86);
	shape.lineTo(1014.5,-426.99);
	shape.lineTo(1014.5,-447.78);
	shape.lineTo(24,-1019.64);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 874;
    
    this.scene.add(mesh);
  }

  addMeshStairs17() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(24,-1051.93);
	shape.lineTo(24,-1009.5);
	shape.lineTo(0,-1009.5);
	shape.lineTo(0,-40.5);
	shape.lineTo(24,-40.5);
	shape.lineTo(24,-19);
	shape.lineTo(612.28,-19);
	shape.lineTo(612.28,-33);
	shape.lineTo(24,-1051.93);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 1234;
    
    this.scene.add(mesh);
  }

  addMeshStairs18() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(13.86,-1009.5);
	shape.lineTo(-6.93,-1009.5);
	shape.lineTo(564.94,-19);
	shape.lineTo(585.72,-19);
	shape.lineTo(13.86,-1009.5);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 1054;
    
    this.scene.add(mesh);
  }

  addMeshStairs19() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-44,-989.5);
	shape.lineTo(-44,-1077.5);
	shape.lineTo(44,-1077.5);
	shape.lineTo(44,-989.5);
	shape.lineTo(-44,-989.5);
    var extrudeSettings = {
      steps: 1,
      amount: 2518.28,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 0;
    
    this.scene.add(mesh);
  }

  addMeshStairs20() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(973,-989.5);
	shape.lineTo(1061,-989.5);
	shape.lineTo(1061,-1077.5);
	shape.lineTo(973,-1077.5);
	shape.lineTo(973,-989.5);
	
    var extrudeSettings = {
      steps: 1,
      amount: 1948.06,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1020;
    mesh.position.y = 0;
    mesh.position.z = 0;
    
    this.scene.add(mesh);
  }

  addMeshStairs21() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-44,-60.5);
	shape.lineTo(-44,27.5);
	shape.lineTo(44,27.5);
	shape.lineTo(44,-60.5);
	shape.lineTo(-44,-60.5);
	
    var extrudeSettings = {
      steps: 1,
      amount: 2518.28,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 1020;
    
    this.scene.add(mesh);
  }

  addMeshStairs22() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(973,-60.5);
	shape.lineTo(973,27.5);
	shape.lineTo(1061,27.5);
	shape.lineTo(1061,-60.5);
	shape.lineTo(973,-60.5);
    var extrudeSettings = {
      steps: 1,
      amount: 2237.55,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 1200;
    mesh.position.y = 0;
    mesh.position.z = 0;
    
    this.scene.add(mesh);
  }

  addMeshStairs23() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1080.5,-1030);
	shape.lineTo(-1440,-670.5);
	shape.lineTo(-1440,-669.5);
	shape.lineTo(-1080.5,-310);
	shape.lineTo(-1049,-310);
	shape.lineTo(-1049,-476);
	shape.lineTo(-1057.5,-476);
	shape.lineTo(-1057.5,-524);
	shape.lineTo(-1049,-524);
	shape.lineTo(-1049,-700);
	shape.lineTo(-19,-700);
	shape.lineTo(-19,-976);
	shape.lineTo(-40.5,-976);
	shape.lineTo(-40.5,-1030);
	shape.lineTo(-1080.5,-1030);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 154;
    
    this.scene.add(mesh);
  }

  addMeshStairs24() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1080.5,-1000);
	shape.lineTo(-1410,-670.5);
	shape.lineTo(-1410,-669.5);
	shape.lineTo(-1080.5,-340);
	shape.lineTo(-1049,-340);
	shape.lineTo(-1049,-358);
	shape.lineTo(-1080.5,-358);
	shape.lineTo(-1392,-669.5);
	shape.lineTo(-1392,-670.5);
	shape.lineTo(-1080.5,-982);
	shape.lineTo(-40.5,-982);
	shape.lineTo(-40.5,-1000);
	shape.lineTo(-1080.5,-1000);
    var extrudeSettings = {
      steps: 1,
      amount: 159,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x =2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 0;
    
    this.scene.add(mesh);
  }

  addMeshStairs25() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(51,-780);
	shape.lineTo(-1078,-780);
	shape.lineTo(-1280,-578);
	shape.lineTo(-1280,-577.5);
	shape.lineTo(-1077.5,-375);
	shape.lineTo(-1049,-375);
	shape.lineTo(-1049,-476);
	shape.lineTo(-1057.5,-476);
	shape.lineTo(-1057.5,-524);
	shape.lineTo(-1009.5,-524);
	shape.lineTo(-1009.5,-500);
	shape.lineTo(51,-500);
	shape.lineTo(51,-780);
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 334;
    
    this.scene.add(mesh);
  }

  addMeshStairs26() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1250,-578);
	shape.lineTo(-1250,-577.5);
	shape.lineTo(-1077.5,-405);
	shape.lineTo(-1049,-405);
	shape.lineTo(-1049,-423);
	shape.lineTo(-1077.5,-423);
	shape.lineTo(-1232,-577.5);
	shape.lineTo(-1232,-578);
	shape.lineTo(-1078,-732);
	shape.lineTo(-19,-732);
	shape.lineTo(-19,-750);
	shape.lineTo(-1078,-750);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 154;
    
    this.scene.add(mesh);
  }

  addMeshStairs27() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-19,-530);
	shape.lineTo(-1009.5,-530);
	shape.lineTo(-1009.5,-476);
	shape.lineTo(-1031,-476);
	shape.lineTo(-1031,-250);
	shape.lineTo(-19,-250);
	shape.lineTo(-19,-530);
	
    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 514;
    
    this.scene.add(mesh);
  }

  addMeshStairs28() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1009.5,-500);
	shape.lineTo(-1009.5,-482);
	shape.lineTo(-19,-482);
	shape.lineTo(-19,-500);
	shape.lineTo(-1009.5,-500);
	
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 334;
    
    this.scene.add(mesh);
  }

  addMeshStairs29() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1031,-280);
	shape.lineTo(-1031,-24);
	shape.lineTo(-1009.5,-24);
	shape.lineTo(-1009.5,0);
	shape.lineTo(-40.5,0);
	shape.lineTo(-40.5,-24);
	shape.lineTo(-19,-24);
	shape.lineTo(-19,-280);
	shape.lineTo(-1031,-280);

    var extrudeSettings = {
      steps: 1,
      amount: 26,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 694;
    
    this.scene.add(mesh);
  }

  addMeshStairs30() {
    var shape = new THREE.Shape();
   
    //shape.moveTo();
shape.moveTo(-1031,-250);
	shape.lineTo(-1031,-232);
	shape.lineTo(-19,-232);
	shape.lineTo(-19,-250);
	shape.lineTo(-1031,-250);
    var extrudeSettings = {
      steps: 1,
      amount: 185,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotateZ(this.degreeToRadians(0));
    //mesh.rotateX(this.degreeToRadians(0));
    mesh.position.x = 2053.5;
    mesh.position.y = -1033.5;
    mesh.position.z = 514;
    
    this.scene.add(mesh);
  }

  

  


}
