import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DOrb({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    // Renderer with optimized precision, power preference, and transparency
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for all elements
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Inner Glowing Wireframe Polyhedron
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    sceneGroup.add(innerMesh);

    // 2. Outer Core Structure (Geometric Nodes)
    const nodeGeo = new THREE.IcosahedronGeometry(1.9, 0);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
    sceneGroup.add(nodeMesh);

    // 3. Floating Particle Constellation
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // Sky blue
    const color2 = new THREE.Color(0x60a5fa); // Electric blue
    const color3 = new THREE.Color(0x34d399); // Emerald accent

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? color1 : (Math.random() > 0.3 ? color2 : color3);
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    sceneGroup.add(particlePoints);

    // Interactive pointer handling with spring damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Smooth animation loop with IntersectionObserver visibility check
    let animationFrameId;
    let isVisible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia interpolation
      targetX += (mouseX * 0.8 - targetX) * 0.04;
      targetY += (mouseY * 0.8 - targetY) * 0.04;

      sceneGroup.rotation.y = elapsedTime * 0.25 + targetX;
      sceneGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 - targetY;
      
      innerMesh.rotation.y = -elapsedTime * 0.35;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.25) * 0.2;

      nodeMesh.rotation.y = elapsedTime * 0.15;
      nodeMesh.rotation.x = elapsedTime * 0.1;

      particlePoints.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    const visibilityObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        clock.start();
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
        clock.stop();
      }
    }, { threshold: 0.05 });

    visibilityObserver.observe(container);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);

      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative select-none pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}
