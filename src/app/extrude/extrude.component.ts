import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-extrude',
  templateUrl: './extrude.component.html',
  styleUrls: ['./extrude.component.css']
})
export class ExtrudeComponent implements OnInit {

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
    self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000000);
    self.camera.position.z = 200000;
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
    // self.addMeshExtrudeHeart();
    // self.addMeshExtrudeBoxShape();
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
    self.addMeshStairs13(); //view 1
    self.addMeshStairs14(); // view 1
    self.addMeshStairs15(); // view 1
    self.addMeshStairs16(); // view 1
    self.addMeshStairs17(); //view 1
    self.addMeshStairs18(); //view 1
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
    shape.moveTo(105000, 1900);
    shape.lineTo(105000, 100950);
    shape.lineTo(99600, 100950);
    shape.lineTo(99600, 103100);
    shape.lineTo(77000, 103100);
    shape.lineTo(77000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -2600,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 18000;
    this.scene.add(mesh);
  }

  addMeshStairs2() {
    var shape = new THREE.Shape();
    shape.moveTo(102000, 100950);
    shape.lineTo(100200, 100950);
    shape.lineTo(100200, 1900);
    shape.lineTo(102000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -15900,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 15900;
    this.scene.add(mesh);
  }

  addMeshStairs3() {
    var shape = new THREE.Shape();
    shape.moveTo(52000, 103100);
    shape.lineTo(52000, 1900);
    shape.lineTo(80000, 1900);
    shape.lineTo(80000, 103100);

    var extrudeSettings = {
      steps: 1,
      amount: -2600,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 36000;
    this.scene.add(mesh);
  }

  addMeshStairs4() {
    var shape = new THREE.Shape();
    shape.moveTo(77000, 103100);
    shape.lineTo(75200, 103100);
    shape.lineTo(75200, 1900);
    shape.lineTo(77000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -18500,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 33900;
    this.scene.add(mesh);
  }

  addMeshStairs5() {
    var shape = new THREE.Shape();
    shape.moveTo(27000, 103100);
    shape.lineTo(27000, 1900);
    shape.lineTo(55000, 1900);
    shape.lineTo(55000, 103100);

    var extrudeSettings = {
      steps: 1,
      amount: -2600,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 54000;
    this.scene.add(mesh);
  }

  addMeshStairs6() {
    var shape = new THREE.Shape();
    shape.moveTo(52000, 103100);
    shape.lineTo(50200, 103100);
    shape.lineTo(50200, 1900);
    shape.lineTo(52000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -18500,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 51900;
    this.scene.add(mesh);
  }

  addMeshStairs7() {
    var shape = new THREE.Shape();
    shape.moveTo(30000, 1900);
    shape.lineTo(30000, 103100);
    shape.lineTo(4400, 103100);
    shape.lineTo(4400, 100950);
    shape.lineTo(2000, 100950);
    shape.lineTo(2000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -2600,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 72000;
    this.scene.add(mesh);
  }

  addMeshStairs8() {
    var shape = new THREE.Shape();
    shape.moveTo(27000, 103100);
    shape.lineTo(25200, 103100);
    shape.lineTo(25200, 1900);
    shape.lineTo(27000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -18500,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 69900;
    this.scene.add(mesh);
  }

  addMeshStairs9() {
    var shape = new THREE.Shape();

    shape.moveTo(5000, 1900);
    shape.lineTo(5000, 100950);
    shape.lineTo(0, 100950);
    shape.lineTo(0, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -2000,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 90000;
    this.scene.add(mesh);
  }

  addMeshStairs10() {
    var shape = new THREE.Shape();
    shape.moveTo(2000, 100950);
    shape.lineTo(200, 100950);
    shape.lineTo(200, 1900);
    shape.lineTo(2000, 1900);

    var extrudeSettings = {
      steps: 1,
      amount: -18500,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 87900;
    this.scene.add(mesh);
  }

  addMeshStairs11() {
    var shape = new THREE.Shape();
    shape.moveTo(-2400,  98950 );
    shape.lineTo(-2400, 107750);
    shape.lineTo(6400, 107750);
    shape.lineTo(6400, 98950);

    var extrudeSettings = {
      steps: 1,
      amount: 142009,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 54491;
    this.scene.add(mesh);
  }

  addMeshStairs12() {
    var shape = new THREE.Shape();
    shape.moveTo(97600, 98950);
    shape.lineTo(97600, 107750);
    shape.lineTo(106400, 107750);
    shape.lineTo(106400, 98950);

    var extrudeSettings = {
      steps: 1,
      amount:   125828 ,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs13() {
    var shape = new THREE.Shape();
    shape.moveTo(       100600 , 22513);
    shape.lineTo(100600, 0);
    shape.lineTo(87637, 0);
    shape.lineTo(6400, 58491);
    shape.lineTo(6400, 61991);
    shape.lineTo(3400, 61991);
    shape.lineTo(3400, 88177);
    shape.lineTo(6400, 88177);
    shape.lineTo(6400, 92377);
    shape.lineTo(97600, 26713);
    shape.lineTo(97600, 22513);

    var extrudeSettings = {
      steps: 1,
      amount: 3300,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y =  101700 ;
    this.scene.add(mesh);
  }

  addMeshStairs14() {
    var shape = new THREE.Shape();
    shape.moveTo(108500, 18865);
    shape.lineTo(108500, 0);
    shape.lineTo(87637, 0);
    shape.lineTo(0, 63099);
    shape.lineTo(0, 90000);
    shape.lineTo(-5000, 90000);
    shape.lineTo(-5000, 96500);
    shape.lineTo(674, 96500);

    var extrudeSettings = {
      steps: 1,
      amount: 3300,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  addMeshStairs15() {
    var shape = new THREE.Shape();
    shape.moveTo(27000, 103100);
    shape.lineTo(27000, 1900);
    shape.lineTo(55000, 1900);
    shape.lineTo(55000, 103100);

    var extrudeSettings = {
      steps: 1,
      amount: 6500,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 102000;
    mesh.position.y = 100100;
    this.scene.add(mesh);
  }

  addMeshStairs16() {
    var shape = new THREE.Shape();
    shape.moveTo(-95600, 96197);
    shape.lineTo(-4400, 30533);
    shape.lineTo(-4400, 26713);
    shape.lineTo(-95600, 92377);

    var extrudeSettings = {
      steps: 1,
      amount: 8800,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 102000;
    mesh.position.y = 98950;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs17() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 37571);
    shape.lineTo(0, 125526);
    shape.lineTo(1200, 126390);
    shape.lineTo(1200, 38435);

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 85600;
    mesh.position.y = 103950;

    //mesh.rotateZ(3.141593);
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs18() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 37571);
    shape.lineTo(0, 125526);
    shape.lineTo(1200, 126390);
    shape.lineTo(1200, 38435);

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.x = 85600;    
    mesh.position.y = 103950;
    
    mesh.rotateZ(3.141593);
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs19() {
    var shape = new THREE.Shape();

    shape.moveTo(0, 47075);
    shape.lineTo(0, 135030);
    shape.lineTo(1200, 135894);
    shape.lineTo(1200, 47939);

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 72400;
    mesh.position.y = 103950;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs20() {
    var shape = new THREE.Shape();

    shape.moveTo(0, 47075);
    shape.lineTo(0, 135030);
    shape.lineTo(1200, 135894);
    shape.lineTo(1200, 47939);

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 72400;
    mesh.position.y = 103950;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs21() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 56579);
    shape.lineTo(0, 144533);
    shape.lineTo(1200, 145397);
    shape.lineTo(1200, 57443);    

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 59200;
    mesh.position.y = 103950;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs22() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 56579);
    shape.lineTo(0, 144533);
    shape.lineTo(1200, 145397);
    shape.lineTo(1200, 57443); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 59200;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs23() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 66083);
    shape.lineTo(0, 154037);
    shape.lineTo(1200, 154901);
    shape.lineTo(1200, 66947); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 46000;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs24() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 66083);
    shape.lineTo(0, 154037);
    shape.lineTo(1200, 154901);
    shape.lineTo(1200, 66947); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 46000;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs25() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 75587);
    shape.lineTo(0, 163541);
    shape.lineTo(1200, 164405);
    shape.lineTo(1200, 76451); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 32800;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs26() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 75587);
    shape.lineTo(0, 163541);
    shape.lineTo(1200, 164405);
    shape.lineTo(1200, 76451); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 32800;
    mesh.position.y = 103950;
    
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs27() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 85091);
    shape.lineTo(0, 173045);
    shape.lineTo(1200, 173909);
    shape.lineTo(1200, 85955);  

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.141593);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 19600;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
  }

  //view 1
  addMeshStairs28() {
    var shape = new THREE.Shape();
    shape.moveTo(0, 85091);
    shape.lineTo(0, 173045);
    shape.lineTo(1200, 173909);
    shape.lineTo(1200, 85955); 

    var extrudeSettings = {
      steps: 1,
      amount: 1200,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateZ(3.14);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 19600;
    mesh.position.y = 103950;
    mesh.position.z = 0;
    this.scene.add(mesh);
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
      steps: 4,
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
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 3;
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

