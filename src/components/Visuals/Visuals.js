import React,{useState, useEffect} from "react";

import * as THREE from 'three'
import {Canvas} from "@/components/Visuals/styles";


export  const Visuals = () => {
    const [currentWidth, setCurrentWidth] = useState()
    const [isDocument, setIsDocument] = useState()
    const [hover, setHover] = useState( false )
    console.log('hover', hover)
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, currentWidth , 0.1, 1000);
    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: hover ? 0x060505 : 0xff6343 });
    // const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    const animate = () => {
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
        setTimeout(() => animate() ,40)
        renderer.render(scene, camera);
    }

// Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    useEffect(() => {
        setCurrentWidth(window.innerWidth / window.innerHeight)
        setIsDocument(document)
    },[])

    const renderer = new THREE.WebGLRenderer({
        canvas: isDocument?.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);
    animate(torus,renderer);
    renderer.render(scene, camera);

    return <Canvas onClick={() => setHover(true)} id='bg'/>
}

export default Visuals
