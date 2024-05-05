import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Your3DScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Renderer setup with transparency
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Set clear color to transparent
        mountRef.current.appendChild(renderer.domElement);

        // Texture loading
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/notes.png');

        // Add a cube with the texture
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Camera position
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default Your3DScene;
