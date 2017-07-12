import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);


export class mu3D {
  x: number;
  y: number;
  radius: number;
  radiansStart: number;
  radiansEnd: number;
}

@Component({
  selector: 'app-bullnose-using-arc2',
  templateUrl: './bullnose-using-arc2.component.html',
  styleUrls: ['./bullnose-using-arc2.component.css']
})
export class BullnoseUsingArc2Component implements OnInit {


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
    //self.addMesh1();
    self.addMesh2();
    // self.addMesh3();
    // self.addMesh4();
    // self.addMesh5();
    // self.addMesh6();
    // self.addMesh7();
    // self.addMesh8();
    // self.addMesh9();
    // self.addMesh10();
    // self.addMesh11();
    // self.addMesh12();
    // self.scene.rotation.x = -1;
    // self.scene.rotation.z = -1;
  }

  addMesh1() {
    let shape = new THREE.Shape();

    shape.moveTo(770, -19);
    shape.lineTo(1050, -19);
    shape.lineTo(1050, -1078);

    shape.bezierCurveTo(1050, -1190, 960, -1280, 848, -1280);
    //ctx.bezierCurveTo(111.6595283262089, 201.9111465546828, 202.00, 111.4987056833308, 202.00, 0);
    //shape.bezierCurveTo(1050,-1178.088853445317, 848, -1168.501294316669, 848, -1280);
    //shape.lineTo(848, -1280);

    shape.bezierCurveTo(736, -1280, 645, -1189.5, 645, -1077.5);
    // shape.lineTo(847.5, -1280);
    // shape.lineTo(645, -1077.5);

    shape.lineTo(645, -1049);
    shape.lineTo(770, -1049);

    var mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { amount: -26 }), this.material);
    //mesh.rotation.set(this.degreeToRadians(0), this.degreeToRadians(0), this.degreeToRadians(0), "zyx");
    mesh.position.set(0, 0, 180);

    this.scene.add(mesh);
  }

  createSmallArc(r: number, rStart: number, rEnd: number): Object {
    // Compute all four points for an arc that subtends the same total angle
    // but is centered on the X-axis

    const a: number = (rEnd - rStart) / 2.0;

    const x4: number = r * Math.cos(a);
    const y4: number = r * Math.sin(a);
    const x1: number = x4;
    const y1: number = -y4;

    const q1: number = x1 * x1 + y1 * y1;
    const q2: number = q1 + x1 * x4 + y1 * y4;
    const k2: number = 4 / 3 * (Math.sqrt(2 * q1 * q2) - q2) / (x1 * y4 - y1 * x4);

    const x2: number = x1 - k2 * y1;
    const y2: number = y1 + k2 * x1;
    const x3: number = x2;
    const y3: number = -y2;

    // Find the arc points' actual locations by computing x1,y1 and x4,y4 
    // and rotating the control points by a + rStart

    const ar: number = a + rStart;
    const cos_ar: number = Math.cos(ar);
    const sin_ar: number = Math.sin(ar);

    return {
      x4: r * Math.cos(rStart),
      y4: r * Math.sin(rStart),
      x3: x2 * cos_ar - y2 * sin_ar,
      y3: x2 * sin_ar + y2 * cos_ar,
      x2: x3 * cos_ar - y3 * sin_ar,
      y2: x3 * sin_ar + y3 * cos_ar,
      x1: r * Math.cos(rEnd),
      y1: r * Math.sin(rEnd)
    };
  }

  buildShape(mu3Ds: mu3D[]): THREE.Shape {
    let self = this;
    let shape: THREE.Shape;
    let bezierCount: number = 0;
    for (var i = 0; i < mu3Ds.length; i++) {
      let mu3D = mu3Ds[i];
      if (!shape) {
        shape = new THREE.Shape();
        shape.moveTo(mu3D.x, mu3D.y);
        console.log("shape.moveTo(" + mu3D.x + ", " + mu3D.y + ");");
      } else {
        if (!(mu3D.x === mu3Ds[i - 1].x && mu3D.y === mu3Ds[i - 1].y)) {
          shape.lineTo(mu3D.x, mu3D.y);
          console.log("shape.moveTo(" + mu3D.x + ", " + mu3D.y + ");");
        }
      }

      if (mu3D.radius) {
        bezierCount++;
        let bezier: any = self.createSmallArc(mu3D.radius, mu3D.radiansStart, mu3D.radiansEnd);
        console.log("bezier", bezier);
        let offsetX2Y1 = Math.round(bezier.y2) - Math.round(bezier.y1);
        let offsetX1Y2 = Math.round(bezier.x2) - Math.round(bezier.x1);
        if(bezierCount % 1 === 1){
          let offset = offsetX1Y2;
          offsetX1Y2 = offsetX2Y1;
          offsetX2Y1 = offset;
        }
        let xEndPosition: number = mu3Ds[i + 1].x;
        let yEndPosition: number = mu3Ds[i + 1].y;
        i += 1;
        mu3D.y *= -1;
        yEndPosition *= -1;
        shape.bezierCurveTo(
          mu3D.x + offsetX1Y2, mu3D.y + offsetX2Y1
          , xEndPosition + offsetX2Y1, yEndPosition + offsetX1Y2
          , xEndPosition, yEndPosition);

        console.log("shape.bezierCurveTo(" + (mu3D.x ) + ", " + (mu3D.y) + ", "
          + (xEndPosition) + ", " + (yEndPosition ) + ", "
          + xEndPosition + ", " + yEndPosition + ");");

      }
    }

    return shape;
  }

  pushMu3D(mu3Ds: mu3D[],
    x: number,
    y: number,
    radius: number,
    radiansStart: number,
    radiansEnd: number): mu3D[] {
    mu3Ds.push(<mu3D>{ x, y, radius, radiansStart, radiansEnd });

    return mu3Ds;
  }

  addMesh2() {
    let mu3Ds = [];
    mu3Ds = this.pushMu3D(mu3Ds, 1020, 1078, 172, 1.57, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 848, 1250, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 848, 1250, 172.5, 3.14159, 1.57079);
    mu3Ds = this.pushMu3D(mu3Ds, 675, 1077.5, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 675, 1049, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 693, 1049, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 693, 1078, 154.5, 3.14159, 1.57079);
    mu3Ds = this.pushMu3D(mu3Ds, 848, 1232, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 848, 1232, 154, 1.57, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 1002, 1078, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 1002, 19, 0, 0, 0);
    mu3Ds = this.pushMu3D(mu3Ds, 1020, 19, 0, 0, 0);
    //let shape = this.buildShape(mu3Ds);
    this.buildShape(mu3Ds);
    console.log(mu3Ds);
    let shape = new THREE.Shape();

    shape.moveTo(1020, -1078);
    shape.bezierCurveTo(1020, -1173, 943, -1250, 848, -1250);
    shape.bezierCurveTo(753, -1250, 675, -1173, 675, -1078);
    shape.lineTo(675, -1049);
    shape.lineTo(693, -1049);
    shape.lineTo(693, -1078);
    shape.bezierCurveTo(693, -1163, 763, -1232, 848, -1232);
    shape.bezierCurveTo(933, -1232, 1002, -1163, 1002, -1078);
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

