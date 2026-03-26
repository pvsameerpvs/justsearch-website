"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const INTRO_DURATION_MS = 2000;
const HERO_LINE = "Just Search Digital Excellence";
const ICON_PARTICLE_COUNT = 120;

const SOCIAL_ICON_PATHS = [
  "/social-icons/facebook.svg",
  "/social-icons/instagram.svg",
  "/social-icons/linkedin.svg",
  "/social-icons/youtube.svg",
  "/social-icons/x.svg",
  "/social-icons/tiktok.svg",
  "/social-icons/whatsapp.svg",
  "/social-icons/snapchat.svg",
  "/social-icons/pinterest.svg",
  "/social-icons/reddit.svg",
];

type SocialParticle = {
  platformIndex: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  scale: number;
  speed: number;
  phase: number;
};

function seededRandom(seed: number) {
  const value = Math.sin(seed * 9283.133 + 0.217) * 43758.5453;
  return value - Math.floor(value);
}

function SocialIconCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const spriteRefs = useRef<Array<THREE.Sprite | null>>([]);
  const textures = useLoader(THREE.TextureLoader, SOCIAL_ICON_PATHS);

  const particles = useMemo<SocialParticle[]>(() => {
    return Array.from({ length: ICON_PARTICLE_COUNT }, (_, index) => {
      const platformIndex = index % SOCIAL_ICON_PATHS.length;
      const xRand = seededRandom(index * 3 + 1);
      const yRand = seededRandom(index * 3 + 2);
      const zRand = seededRandom(index * 3 + 3);
      const scaleRand = seededRandom(index * 5 + 4);
      const speedRand = seededRandom(index * 7 + 5);
      const phaseRand = seededRandom(index * 11 + 6);

      return {
        platformIndex,
        baseX: (xRand - 0.5) * 18,
        baseY: (yRand - 0.5) * 10,
        baseZ: (zRand - 0.5) * 8,
        scale: 0.22 + scaleRand * 0.12,
        speed: 0.25 + speedRand * 0.35,
        phase: phaseRand * Math.PI * 2,
      };
    });
  }, []);

  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    });
  }, [textures]);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.14) * 0.2;
      groupRef.current.rotation.x = Math.cos(time * 0.08) * 0.08;
    }

    spriteRefs.current.forEach((sprite, index) => {
      const particle = particles[index];
      if (!sprite || !particle) {
        return;
      }

      const wave = time * particle.speed + particle.phase;
      sprite.position.set(
        particle.baseX + Math.cos(wave) * 0.45,
        particle.baseY + Math.sin(wave * 1.35) * 0.35,
        particle.baseZ + Math.sin(wave * 0.8) * 0.3
      );
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => {
        const texture = textures[particle.platformIndex];

        return (
          <sprite
            key={index}
            ref={(node) => {
              spriteRefs.current[index] = node;
            }}
            position={[particle.baseX, particle.baseY, particle.baseZ]}
            scale={[particle.scale, particle.scale, 1]}
          >
            <spriteMaterial
              map={texture}
              color="#ffffff"
              transparent
              alphaTest={0.12}
              opacity={0.94}
              depthWrite={false}
            />
          </sprite>
        );
      })}
    </group>
  );
}

function SkyTouchBackground() {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Matches the brand orange glow beautifully */}
      <directionalLight position={[5, 1, 1]} intensity={2} color="#F26A4B" />
      
      {/* Majestic sunset sky simulation using three.js exact atmosphere scattering */}
      <Sky 
        distance={450000} 
        sunPosition={[5, 0.4, -2]} 
        inclination={0} 
        azimuth={0.25} 
        turbidity={0.6}
        rayleigh={1.2}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      
      {/* Atmospheric depth via twinkling stars and floating social icon particles */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={2} />
      <SocialIconCloud />
    </>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }

    const startPlaybackTimer = window.setTimeout(() => {
      setIntroFinished(true);
      const currentVideo = videoRef.current;
      if (currentVideo) {
        currentVideo.currentTime = 0;
        void currentVideo.play().catch(() => {});
      }
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(startPlaybackTimer);
  }, []);

  const words = HERO_LINE.split(" ");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Three.js Thunder Background - visible only during intro */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 z-0 ${
          introFinished ? "opacity-0" : "opacity-100"
        }`}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <SkyTouchBackground />
        </Canvas>
      </div>

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          introFinished ? "opacity-100" : "opacity-0"
        }`}
        src="/hero-vid.mp4"
        muted
        loop
        playsInline
        preload="auto"
      />

      <div
        className={`absolute inset-0 transition-colors duration-1000 pointer-events-none z-10 ${
          introFinished ? "bg-black/50" : "bg-transparent"
        }`}
      />

      <div
        className={`absolute left-1/2 z-20 w-full px-4 sm:px-6 text-center transition-all duration-1000 ease-in-out transform -translate-x-1/2 ${
          introFinished ? "bottom-10 sm:bottom-12 md:bottom-16 translate-y-0" : "top-1/2 -translate-y-1/2"
        }`}
      >
        <h1
          className={`spectral-semibold tracking-tight transition-all duration-1000 flex flex-wrap justify-center ${
            introFinished ? "text-3xl sm:text-4xl lg:text-5xl text-white" : "text-4xl sm:text-6xl md:text-7xl xl:text-8xl"
          }`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: i * 0.3 + 0.2, // Stagger effect
                ease: [0.25, 0.4, 0.25, 1], // Smooth premium easing
              }}
              className={`mr-2 sm:mr-3 md:mr-4 drop-shadow-2xl ${
                i >= 2 ? "text-brand-orange" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Scroll indicator */}
     
    </section>
  );
}
