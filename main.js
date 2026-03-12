import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, precision: 'mediump' });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Optimizare GPU mobil
document.body.appendChild(renderer.domElement);

// Adaugă un mediu de bază (Environment Map)
const gen = new THREE.PMREMGenerator(renderer);
scene.environment = gen.fromScene(new THREE.Scene()).texture;

// Exemplu Material Plastic (PBR)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({
    color: 0x2194ce,
    roughness: 0.2,
    metalness: 0.1
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
