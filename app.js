import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
//RONTALE_M2SUMMATIVE
//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 6); //position the camera

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//room box
const roomGeometry = new THREE.BoxGeometry(5, 3, 5);
const roomMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }); // Backside material to show inside
const room = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(room);

//function to create a bed
function createBed() {
    
    const bedGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC }); // Brown color for the bed
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(0, 0.1, -1); // Position the bed
    room.add(bed);
}

//function to create a bed
function createBed1() {
    
    const bedGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color for the bed
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(0, 0, -1); //position the bed
    room.add(bed);
}

function createBed2() {//pillow
    
    const bedGeometry = new THREE.BoxGeometry(0.6, 0.2, 0.5);
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 }); // Brown color for the bed
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(0, 0.2, -1.6); //position the bed
    room.add(bed);
}

//function to create a table
function createTable() {
    const tableGeometry = new THREE.BoxGeometry(1, 0.1, 2);
    const tableMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D }); //color
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(2, 0.2, -1); //position the table
    room.add(table);
}

function createTable1() {
    const tableGeometry = new THREE.BoxGeometry(1, 0.3, 0.1);
    const tableMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D }); //color
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(2, 0, -0.2); //position the table
    room.add(table);
}

function createTable2() {
    const tableGeometry = new THREE.BoxGeometry(1, 0.3, 0.1);
    const tableMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D }); //color
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(2, 0, -1.8); //position the table
    room.add(table);
}

// Function to create a chair
function createChair() {
    const chairGeometry = new THREE.BoxGeometry(0.5, 0.05, 0.5);
    const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); //color
    const chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(2, 0.1, 0.5); //position the chair
    room.add(chair);

}

function createChair1() {
    const chairGeometry = new THREE.BoxGeometry(0.1, 0.35, 0.1);
    const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); //color
    const chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(2, -0.1, 0.5); //position the chair
    room.add(chair);

}

function createChair2() {
    const chairGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.5);
    const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); //color
    const chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(2.2, 0.25, 0.5); //position the chair
    room.add(chair);

}


//function to create windows
function createWindows() {
    const windowGeometry = new THREE.PlaneGeometry(0.75, 0.75);
    const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.DoubleSide }); //color
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(-1.5, 0.9, -2); //position the first window

    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(1.5, 0.9, -2); //position the second window

    room.add(window1);
    room.add(window2);
}

//function to create a lamp
function createLamp() {
    const lampBaseGeometry = new THREE.CylinderGeometry(0.05, 0.1, 0.2);
    const lampBaseMaterial = new THREE.MeshBasicMaterial({ color: 0xA26A42 });
    const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
    lampBase.position.set(2, 0.35, -0.3); //position the lamp base
    room.add(lampBase);

    const lampShadeGeometry = new THREE.ConeGeometry(0.1, 0.3);
    const lampShadeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); //color
    const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
    lampShade.position.set(2, 0.5, -0.3); //position the lamp shade on top of the base
    lampShade.rotation.x = Math.PI; //rotate the lamp shade
    room.add(lampShade);
}



// room objects
createBed();
createBed1();
createBed2();//pillow
createTable();
createTable1();
createTable2();
createChair();
createChair1();
createChair2();
createWindows();
createLamp();

//window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//animation loop
function animate() {
    requestAnimationFrame(animate);
    room.rotation.y += 0.003; //rotate the room around the Y-axis
    renderer.render(scene, camera);
}

animate();
