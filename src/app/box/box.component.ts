import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
let OrbitControls = _OrbitControls(THREE);

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements AfterViewInit {

  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;
  light: any;

  constructor() { }

  animate: any = () => {
    let self = this;
    requestAnimationFrame(self.animate);
    self.renderer.render(self.scene, self.camera);
  }

  ngAfterViewInit() {
    this.init();
    this.animate();
    console.log(this.scene);
  }

  init() {
    let self = this;

    //Create Scene
    self.scene = new THREE.Scene();

    //Camera perpective usually 35-45
    self.camera = self.getCamera();

    self.geometry = self.getGeometry();
    self.material = self.getMaterial();

    self.mesh = new THREE.Mesh(self.geometry, self.material);

    self.scene.add(self.mesh);

    var mesh = new THREE.Object3D();

			mesh.add( new THREE.LineSegments(

				new THREE.Geometry(),

				new THREE.LineBasicMaterial( {
					color: 0xffffff,
					transparent: true,
					opacity: 0.5
				} )

			) );

			mesh.add( new THREE.Mesh(

				new THREE.Geometry(),

				new THREE.MeshPhongMaterial( {
					color: 0x156289,
					emissive: 0x072534,
					side: THREE.DoubleSide,
					shading: THREE.FlatShading
				} )

			) );

		

			self.scene.add( mesh );
    

    //set renderer
    self.renderer = WebGLRenderingContext ? new THREE.WebGLRenderer({ antialias: true }) : new THREE.CanvasRenderer();
    self.renderer.setPixelRatio( window.devicePixelRatio );
			self.renderer.setSize( window.innerWidth, window.innerHeight );
			self.renderer.setClearColor( 0x000000, 1 );
    self.renderer.setSize(window.innerWidth, window.innerHeight);

    var controls = new OrbitControls(self.camera);

    //set light
    self.light = self.getLight();
    self.scene.add(self.light);

    var lights = [];
			lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

			lights[ 0 ].position.set( 0, 200, 0 );
			lights[ 1 ].position.set( 100, 200, 100 );
			lights[ 2 ].position.set( - 100, - 200, - 100 );

			self.scene.add( lights[ 0 ] );
			self.scene.add( lights[ 1 ] );
			self.scene.add( lights[ 2 ] );

    //add renderer to html
    document.body.appendChild(self.renderer.domElement);

  }

  getMaterial() {
    var material = new THREE.MeshBasicMaterial({ color: 0x00fff0, wireframe: true });
    return material;
  }

  getRawShaderMaterial() {
    var material = new THREE.RawShaderMaterial({

      uniforms: {
        time: { value: 1.0 }
      },
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,

    });

    return material;
  }

  getMeshLambertMaterial() {
    var material = new THREE.MeshLambertMaterial({ color: 0xdddddd, shading: THREE.FlatShading });


    return material;
  }

  getGeometry() {
    var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    return geometry;
  }

  getCamera() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
		// 	camera.position.z = 30;
    return camera;
  }

  getLight() {
    //AmbientLight
    var light = new THREE.AmbientLight(0x404040); // soft white light

    //DirectionalLight
    light = new THREE.DirectionalLight(0xffffff, 0.5);

    return light;
  }

}
