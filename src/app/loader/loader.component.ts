import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import * as _STLLoader from 'three-stl-loader';
let STLLoader = _STLLoader(THREE);

import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

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
    //console.log(self.scene);
    
    // var xxx = self.scene.toJSON();
    // console.log("self.scene.toJSON", xxx);
    // console.log(JSON.stringify(xxx));
  }

  initScene() {
    let self = this;
    self.scene = new THREE.Scene();
    self.scene.background = new THREE.Color(0x999999);

    self.setCamera();
    self.setCameraControl();

    self.setRenderer();

    document.body.appendChild(self.renderer.domElement);

    self.setMeshes();

    self.setLight();
    
  }

  setCamera() {
    let self = this;
    self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    self.camera.position.z = 5000;
   
  }

  setCameraControl() {
    let self = this;
    new OrbitControls(self.camera);
  }

  setRenderer() {
    let self = this;
    self.renderer = new THREE.WebGLRenderer({antialias: true});
    //self.renderer = new THREE.CanvasRenderer();
    self.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setMeshes() {
    let self = this;
    // self.addMesh();
    // self.addMesh2();
    // self.addStraightUnit();
    // self.addLandingUnit();
    // self.addStraightUnit2();
    self.addFromObject();

  }

  addFromObject() {
    let self = this;

    var loader = new THREE.STLLoader();

    loader.load('assets/kiks.stl', function (geometry) {
      var material = new THREE.MeshLambertMaterial({ color: 0xa57b4a, shading: THREE.FlatShading, side: THREE.DoubleSide });
      var mesh = new THREE.Mesh(geometry, material);
      console.log("geometry", JSON.stringify(geometry.toJSON()));
      mesh.position.set( 0, 0,-500 );
      mesh.rotation.set( -1.0, 0, -0.7 );
      mesh.scale.set( 0.5, 0.5, 0.5 );

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      self.scene.add(mesh)
    })

    // var loader = new STLLoader();
    // loader.load('assets/alvintest.stl', function (geometry) {
    //   alert();
    //   // var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
    //   // var mesh = new THREE.Mesh( geometry, material );

    //   // mesh.position.set( 0, - 0.25, 0.6 );
    //   // mesh.rotation.set( 0, - Math.PI / 2, 0 );
    //   // mesh.scale.set( 0.5, 0.5, 0.5 );

    //   // mesh.castShadow = true;
    //   // mesh.receiveShadow = true;

    //   // self.scene.add( mesh );



    // });

  }

  addStraightUnit() {
    let self = this;
    let stepHeight = 2;
    let stepHeightIncrement = .5;
    let stepWidth = -2;
    let stepWidthIncrement = 1;
    for (var x = 0; x < 4; x++) {

      var step = self.getStepMesh();
      step.position.set(0, stepHeight, stepWidth);
      self.scene.add(step);
      stepWidth += stepWidthIncrement;
      stepHeight -= stepHeightIncrement;
    }
  }

  addStraightUnit2() {
    let self = this;
    let stepHeight = 4.5;
    let stepHeightIncrement = .5;
    let stepWidth = -5;
    let stepWidthIncrement = 1;
    for (var x = 0; x < 4; x++) {

      var step = self.getStepMesh2();
      step.position.set(stepWidth, stepHeight, -4);
      self.scene.add(step);
      stepWidth += stepWidthIncrement;
      stepHeight -= stepHeightIncrement;
    }
  }

  addLandingUnit() {
    let self = this;
    let geometry = new THREE.BoxBufferGeometry(3, .5, 3);
    let material = new THREE.MeshLambertMaterial({ color: 0xa57b4a, shading: THREE.FlatShading, side: THREE.DoubleSide });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 2.5, -4);
    self.scene.add(cube);
  }

  getStepMesh() {
    let self = this;
    let geometry = new THREE.BoxBufferGeometry(3, .5, 1);
    let material = new THREE.MeshLambertMaterial({ color: 0xa57b4a, shading: THREE.FlatShading, side: THREE.DoubleSide });
    let cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  getStepMesh2() {
    let self = this;
    let geometry = new THREE.BoxBufferGeometry(1, .5, 3);
    let material = new THREE.MeshLambertMaterial({ color: 0xa57b4a, shading: THREE.FlatShading, side: THREE.DoubleSide });
    let cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  addMesh() {
    let self = this;
    let geometry = new THREE.BoxBufferGeometry(3, .5, 1);
    let material = new THREE.MeshLambertMaterial({ color: 0xdddddd, shading: THREE.FlatShading, side: THREE.DoubleSide });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, -.5, 1);
    self.scene.add(cube);
  }

  addMesh2() {
    let self = this;
    let geometry = new THREE.BoxBufferGeometry(3, .5, 1);
    let material = new THREE.MeshLambertMaterial({ color: 0xa57b4a, shading: THREE.FlatShading, side: THREE.DoubleSide });
    let cube = new THREE.Mesh(geometry, material);
    self.scene.add(cube);
  }


  setLight() {
    let self = this;

    let lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(500, 10000, 100);
    lights[1].position.set(500, 10000, 100);
    lights[2].position.set(- 500, - 10000, - 100);

    self.scene.add(lights[0]);
    self.scene.add(lights[1]);
    self.scene.add(lights[2]);
  }

}
