import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  // Add more image paths as needed
];

function Image({ url, position, onClick }) {
  const texture = useLoader(TextureLoader, url);
  return (
    <animated.mesh position={position} onClick={onClick}>
      <boxBufferGeometry args={[1, 1, 0.1]} />
      <meshBasicMaterial map={texture} />
    </animated.mesh>
  );
}

function Gallery() {
  const groupRef = useRef();
  const [activeIndex, setActiveIndex] = useState(null);

  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
  });

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const { scale } = useSpring({
    scale: activeIndex !== null ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <group ref={groupRef}>
      {images.map((url, index) => (
        <Image
          key={index}
          url={url}
          position={[
            Math.sin((index / images.length) * Math.PI * 2) * 3,
            0,
            Math.cos((index / images.length) * Math.PI * 2) * 3,
          ]}
          onClick={() => handleClick(index)}
        />
      ))}
    </group>
  );
}

export default function ThreeDGallery() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Gallery />
    </Canvas>
  );
}