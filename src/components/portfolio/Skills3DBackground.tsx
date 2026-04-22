import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Skills3DBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.035);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 18 : 14;
    camera.position.x = isMobile ? 0 : 4;
    camera.position.y = 2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 400, 50); // Violet light
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 400, 50); // Emerald light
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 100, 50); // White rim light
    pointLight3.position.set(0, 10, -5);
    scene.add(pointLight3);

    // Keyboard Keys Group
    const keysGroup = new THREE.Group();
    scene.add(keysGroup);

    // Generator for realistic-looking keycaps with text
    const createKeycapMaterials = (text: string, keyWidth: number, keyDepth: number) => {
      const canvas = document.createElement('canvas');
      const res = 256;
      canvas.width = res * keyWidth;
      canvas.height = res * keyDepth;
      const ctx = canvas.getContext('2d')!;

      // Side Color (dark grey)
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top face simulation (inset rounded rect to simulate keycap bevel)
      ctx.fillStyle = '#1e1e1e';
      const p = 15; // padding
      const r = 25; // border radius
      const w = canvas.width;
      const h = canvas.height;

      ctx.beginPath();
      ctx.moveTo(p + r, p);
      ctx.lineTo(w - p - r, p);
      ctx.quadraticCurveTo(w - p, p, w - p, p + r);
      ctx.lineTo(w - p, h - p - r);
      ctx.quadraticCurveTo(w - p, h - p, w - p - r, h - p);
      ctx.lineTo(p + r, h - p);
      ctx.quadraticCurveTo(p, h - p, p, h - p - r);
      ctx.lineTo(p, p + r);
      ctx.quadraticCurveTo(p, p, p + r, p);
      ctx.fill();

      // Text Drawing
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const fontSize = Math.min(w, h) * 0.35;
      ctx.font = `bold ${fontSize}px monospace`;
      
      // Violet text with neon glow, except for spacebar
      if (text !== "Space") {
        ctx.fillStyle = '#8b5cf6'; 
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 15;
        ctx.fillText(text, w / 2, h / 2);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const sideMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
      const topMat = new THREE.MeshStandardMaterial({ 
        map: texture, 
        roughness: 0.4,
        metalness: 0.1
      });

      // BoxGeometry face order: right, left, top, bottom, front, back
      return [sideMat, sideMat, topMat, sideMat, sideMat, sideMat];
    };

    const keyLabels = [
      "Next.js", "React", "TypeScript", "Tailwind", "shadcn", "Framer", "Vite",
      "Node.js", "Express", "Bun", "REST API", "Prisma",
      "PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase",
      "AI", "HuggingFace", "Ollama", "Prompt",
      "AWS", "Docker", "Vercel", "Cloudinary", "CI/CD",
      "Git", "GitHub", "VS Code", "Figma",
      "Space", "Enter", "Shift", "Ctrl", "</>", "=>"
    ];
    const keyCount = 35; // Keep the reduced density
    const keys: { mesh: THREE.Mesh; rotSpeed: THREE.Vector3; floatSpeed: number; floatOffset: number }[] = [];

    for (let i = 0; i < keyCount; i++) {
      // Pick a random text label
      const text = keyLabels[Math.floor(Math.random() * keyLabels.length)];
      
      // Determine dimensions based on text/type length
      let keyW = 1.2;
      let keyD = 1.2;
      
      if (text === "Space") { 
        keyW = 5; 
      } else if (text === "Enter" || text === "Shift" || text.length >= 8) { 
        keyW = 2.8; 
      } else if (text.length >= 5) { 
        keyW = 2.0; 
      } else if (text === "Ctrl" || text === "Alt") {
        keyW = 1.8;
      }

      const geo = new THREE.BoxGeometry(keyW, 0.6, keyD);
      const materials = createKeycapMaterials(text, keyW, keyD);
      const mesh = new THREE.Mesh(geo, materials);
      
      // Random positions spread around the screen
      mesh.position.x = (Math.random() - 0.5) * 35;
      mesh.position.y = (Math.random() - 0.5) * 35;
      mesh.position.z = (Math.random() - 0.5) * 20 - 5; 

      // Random initial rotations
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      keysGroup.add(mesh);

      keys.push({
        mesh,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
        floatSpeed: 0.2 + Math.random() * 0.5,
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      // Group rotation (reacts to mouse)
      keysGroup.rotation.y += 0.05 * (targetX - keysGroup.rotation.y);
      keysGroup.rotation.x += 0.05 * (targetY - keysGroup.rotation.x);
      
      // Constant slow rotation
      keysGroup.rotation.z += 0.0005;
      keysGroup.rotation.y += 0.0002;

      // Animate individual keys
      keys.forEach((keyData) => {
        keyData.mesh.rotation.x += keyData.rotSpeed.x;
        keyData.mesh.rotation.y += keyData.rotSpeed.y;
        keyData.mesh.rotation.z += keyData.rotSpeed.z;

        // Gentle floating up and down
        keyData.mesh.position.y += Math.sin(elapsedTime * keyData.floatSpeed + keyData.floatOffset) * 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler using ResizeObserver
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      
      const isMobileResize = window.innerWidth < 768;
      camera.position.z = isMobileResize ? 18 : 14;
      camera.position.x = isMobileResize ? 0 : 4;
      
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Note: In a production app with hundreds of dynamic canvases, we'd loop through and dispose the generated geometries/materials.
      // Since it's exactly 35 keys on mount, the memory footprint is stable, but we clean up renderer.
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center"
      style={{ 
        opacity: 0.9,
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
