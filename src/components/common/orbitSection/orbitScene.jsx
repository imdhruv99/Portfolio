import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const OrbitScene = ({ isDarkTheme }) => {
    const sceneRef = useRef(null);
    const materialRef = useRef(null);
    const worldRef = useRef({
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        ),
        renderer: new THREE.WebGLRenderer({ antialias: true, alpha: true }),
        group: null,
    });

    const getRandomPastelColor = () => {
        const r = Math.random() * 0.5 + 0.5;
        const g = Math.random() * 0.5 + 0.5;
        const b = Math.random() * 0.5 + 0.5;
        return new THREE.Color(r, g, b);
    };

    useEffect(() => {
        const { scene, camera, renderer } = worldRef.current;
        const container = sceneRef.current;

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        camera.position.set(0, 0, 500);
        scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

        const geometry = new THREE.DodecahedronGeometry(3, 0);
        materialRef.current = new THREE.MeshPhongMaterial({
            color: getRandomPastelColor(),
            flatShading: true,
        });

        const group = new THREE.Group();
        worldRef.current.group = group;

        for (let i = 0; i < 50; i++) {
            const mesh = new THREE.Mesh(geometry, materialRef.current);
            mesh.position.x = Math.random() * 1000 - 500;
            mesh.position.y = Math.random() * 600 - 300;
            mesh.position.z = Math.random() * 1000 - 200;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            group.add(mesh);
        }
        scene.add(group);

        const lights = [
            new THREE.DirectionalLight(0xffffff, 1),
            new THREE.DirectionalLight(0x141414, 1),
            new THREE.AmbientLight(0x141414, 0.3),
        ];

        lights[0].position.set(1, 1, 1);
        lights[1].position.set(-1, -1, -1);
        lights.forEach((light) => scene.add(light));

        const animate = () => {
            group.rotation.x += 0.0002;
            group.rotation.y += 0.0002;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        const handlePointerMove = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const z = (e.clientX - centerX) / 900;
            const x = (e.clientY - centerY) / 900;

            gsap.to(group.rotation, {
                x: -x,
                y: -z,
                duration: 1,
                ease: 'power2.out',
                onUpdate: () => renderer.render(scene, camera),
            });
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.color.set(getRandomPastelColor());
            worldRef.current.renderer.render(
                worldRef.current.scene,
                worldRef.current.camera,
            );
        }
    }, [isDarkTheme]);

    return <div ref={sceneRef} style={{ width: '100%', height: '100%' }} />;
};

OrbitScene.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
};

export default OrbitScene;
