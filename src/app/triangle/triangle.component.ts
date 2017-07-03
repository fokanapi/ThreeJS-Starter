import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

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

  ngOnInit() {
    this.init();
    this.animate();
    console.log(this.scene);
  }


  init() {
    let self = this;
    self.scene = new THREE.Scene();
    //Camera perpective usually 35-45
    self.camera = new THREE.PerspectiveCamera(45, (window.innerWidth / 2) / window.innerHeight, 1, 1000);
    self.camera.position.z = 20;



    self.geometry = self.getTriangleGeometry();

    self.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    self.material = self.getMaterial();

    self.mesh = new THREE.Mesh(self.geometry, self.material);
    self.scene.add(self.mesh);

    self.renderer = WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();

    self.renderer.setSize(window.innerWidth / 2, window.innerHeight);

    document.body.appendChild(self.renderer.domElement);

  }

  getTriangleGeometry(): THREE.Geometry {
    let triangleGeomtry = new THREE.Geometry();

    triangleGeomtry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
    triangleGeomtry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    triangleGeomtry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));

    triangleGeomtry.faces.push(new THREE.Face3(0, 1, 2));

    triangleGeomtry.faces[0].vertexColors[0] = new THREE.Color(0xFF0000);
    triangleGeomtry.faces[0].vertexColors[1] = new THREE.Color(0x00FF00);
    triangleGeomtry.faces[0].vertexColors[2] = new THREE.Color(0xFF0000);

    triangleGeomtry.scale(2,2,2);
    
    return triangleGeomtry; 
  }

  getMaterial(){
    let triangleMaterial = new THREE.MeshBasicMaterial({
      vertexColors: THREE.VertexColors,
      side: THREE.DoubleSide
    });
  }

}
