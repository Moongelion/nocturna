
// import * as THREE from
//   "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

// const container = document.querySelector("#dice-container");

// // ── ESCENA ─────────

// const scene = new THREE.Scene();


// // ── CÁMARA ─────────

// const camera = new THREE.PerspectiveCamera(
//   45,
//   container.clientWidth / container.clientHeight,
//   0.1,
//   100
// );

// camera.position.z = 5;


// // ── RENDERIZADOR ────────

// const renderer = new THREE.WebGLRenderer({
//   antialias: true,
//   alpha: true
// });

// renderer.setSize(
//   container.clientWidth,
//   container.clientHeight
// );

// renderer.setPixelRatio(
//   Math.min(window.devicePixelRatio, 2)
// );

// container.appendChild(renderer.domElement);


// // ── D20 ─────────────────

// const geometry = new THREE.IcosahedronGeometry(1.4, 0);

// const material = new THREE.MeshStandardMaterial({
//   color: 0x3a1852,
//   roughness: 0.65,
//   metalness: 0.25
// });

// const dice = new THREE.Mesh(geometry, material);

// scene.add(dice);

// const ambientLight = new THREE.AmbientLight(
//   0xffffff,
//   1.5
// );

// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(
//   0xd8b4ff,
//   30
// );

// pointLight.position.set(3, 3, 4);

// scene.add(pointLight);

// // ── PRIMER RENDER ────────

// renderer.render(scene, camera);
