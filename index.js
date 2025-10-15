import * as THREE from 'three';

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const wireMesh = new THREE.Mesh(geo, wireMat);
scene.add(wireMesh);

const hemLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5);
scene.add(hemLight);

function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
    renderer.render(scene, camera);
}
animate();