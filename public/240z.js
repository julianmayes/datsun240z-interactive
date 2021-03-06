/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import lerp from "lerp";
import { useSpring, animated, config } from "@react-spring/three";

export default function Car({ screen, setScreen, position }) {

  const group = useRef();

  const { nodes, materials } = useGLTF("/240z.glb");

  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: screen == 1 || screen == 2 || screen == 5 || screen == 7 ? 1.5 : 1,
    config: config.gentle,
  });

  const styles = useSpring({
    x: screen == 1 ? 10 : screen == 2 ? -10 : screen == 3 ? -5 : screen == 4 ? 0 : 0,
    config: config.gentle,
  });

  useFrame(
    (state) => (
      (group.current.position.z = -5),
      screen == 5 || screen == 6
      ? (group.current.position.y = -4)
      : screen == 7
      ? (group.current.position.y = 0)
      : (group.current.position.y = -2),
      screen == 8 ? (group.current.position.x = -1 + position.x / 1000)
      : null,
      /*       (group.current.position.z = -5),
      (group.current.position.y = -2),
            screen === 0
        ? (group.current.position.x = 0)
        : screen === 1
        ? (group.current.position.x = 10)
        : (group.current.position.x = -2), */
      screen === 0
        ? (group.current.rotation.y += 0.01)
        : screen === 3
        ? (group.current.rotation.y = 1.5)
        : screen === 5
        ? (group.current.rotation.y = 1.57)
        : screen === 6 || screen == 7
        ? (group.current.rotation.y = 3.12)
        : screen === 8
        ? (group.current.rotation.y = 10.9 + position.x / 20000)
        : (group.current.rotation.y = 0)
    )
  );

  return (
    <animated.group
      scale={scale}
      position={styles.x}
      onClick={() => setActive(!active)}
      ref={group}
      dispose={null}
    >
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Cylinder009_1.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Cylinder009_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Cylinder009_3.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        geometry={nodes.Cylinder009_4.geometry}
        material={materials["Material.006"]}
      />
    </animated.group>
  );
}

useGLTF.preload("/240z.glb");
