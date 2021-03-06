/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ch24: THREE.Mesh
  }
  materials: {
    Ch24_Body: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[0.21, -0.02, -50.22]} rotation={[-1.21, -0.31, 0.14]}>
          <group position={[0, 10.97, -0.92]} rotation={[0.48, 0.04, -0.12]}>
            <group position={[0, 12.84, 0]} rotation={[0.22, 0.13, 0.06]}>
              <group position={[0, 14.68, 0]} rotation={[0.23, 0.15, 0.03]}>
                <group position={[0, 16.51, 0]} rotation={[-0.4, 0.06, -0.07]}>
                  <group position={[0, 7.06, 2.3]} rotation={[-0.47, 0.08, -0.09]} />
                </group>
                <group position={[6.92, 14.06, -0.22]} rotation={[1.56, -0.31, -1.6]}>
                  <group position={[0, 14.53, 0]} rotation={[0.97, 0.15, -0.03]}>
                    <group position={[0, 21.03, 0]} rotation={[0.04, -0.02, 0.34]}>
                      <group position={[0, 30.84, 0]} rotation={[-0.06, -0.09, -0.05]}>
                        <group position={[-3.85, 2.9, 1.28]} rotation={[0.25, 0.26, 0.37]}>
                          <group position={[-0.21, 3.98, 0]} rotation={[0.08, 0, -0.16]}>
                            <group position={[0.07, 4.81, 0]} rotation={[-0.06, 0, -0.15]} />
                          </group>
                        </group>
                        <group position={[-4.32, 10.64, -0.56]} rotation={[0.09, 0.03, 0.04]}>
                          <group position={[0.04, 4.43, 0]} rotation={[0.32, -0.01, -0.03]}>
                            <group position={[-0.02, 4.06, 0]} rotation={[0.25, 0, -0.02]} />
                          </group>
                        </group>
                        <group position={[-1.08, 10.62, -0.54]} rotation={[0.19, -0.06, 0.01]}>
                          <group position={[0.01, 4.51, 0]} rotation={[0.47, -0.01, -0.04]}>
                            <group position={[-0.01, 4.34, 0]} rotation={[0.2, 0, -0.01]} />
                          </group>
                        </group>
                        <group position={[1.64, 10.32, -0.47]} rotation={[0.14, -0.15, -0.06]}>
                          <group position={[0, 4.41, 0]} rotation={[0.57, -0.02, -0.05]}>
                            <group position={[0, 4.16, 0]} rotation={[0.27, 0, -0.03]} />
                          </group>
                        </group>
                        <group position={[3.76, 8.76, -0.72]} rotation={[0.36, -0.23, -0.06]}>
                          <group position={[-0.03, 4.53, 0]} rotation={[0.59, -0.02, -0.05]}>
                            <group position={[0.04, 3.83, 0]} rotation={[0.26, -0.01, -0.05]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-6.92, 14.05, -0.19]} rotation={[1.77, 0.1, 1.1]}>
                  <group position={[0, 14.53, 0]} rotation={[0.07, 0.2, -0.53]}>
                    <group position={[0, 21.03, 0]} rotation={[0.01, -0.06, -0.2]}>
                      <group position={[0, 30.84, 0]} rotation={[-0.36, 0.01, 0.61]}>
                        <group position={[3.77, 2.9, 1.28]} rotation={[0.34, -0.31, -0.55]}>
                          <group position={[0.28, 3.93, 0]} rotation={[0.16, -0.03, -0.04]}>
                            <group position={[0.13, 4.75, 0]} rotation={[-0.08, 0.02, -0.57]} />
                          </group>
                        </group>
                        <group position={[4.25, 10.75, -0.6]} rotation={[-0.06, 0.04, -0.22]}>
                          <group position={[-0.03, 4.41, 0]} rotation={[0, 0, 0.02]}>
                            <group position={[0.03, 4.06, 0]} rotation={[-0.25, 0.03, -0.12]} />
                          </group>
                        </group>
                        <group position={[1.16, 10.57, -0.39]} rotation={[-0.15, 0.11, -0.16]}>
                          <group position={[-0.03, 4.39, 0]} rotation={[0.53, 0.01, 0.05]}>
                            <group position={[0.02, 4.42, 0]} rotation={[0.68, 0.01, 0.04]} />
                          </group>
                        </group>
                        <group position={[-1.66, 10.18, -0.59]} rotation={[-0.08, 0.07, -0.06]}>
                          <group position={[0, 4.61, 0]} rotation={[0.72, 0.03, 0.07]}>
                            <group position={[0, 4.15, 0]} rotation={[1.05, 0.06, 0.1]} />
                          </group>
                        </group>
                        <group position={[-3.75, 9.01, -0.76]} rotation={[0.29, 0.17, -0.04]}>
                          <group position={[0.02, 4.5, 0]} rotation={[0.47, 0.01, 0.05]}>
                            <group position={[-0.06, 3.68, 0]} rotation={[0.64, 0.04, 0.12]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[9.29, -6.1, 0.1]} rotation={[-1.62, -0.46, -2.6]}>
            <group position={[0, 41.28, 0]} rotation={[-1.88, 0.21, -0.56]}>
              <group position={[0, 34.82, 0]} rotation={[1.37, 0.14, -0.2]}>
                <group position={[0, 19.62, 0]} rotation={[0.57, 0.03, -0.02]} />
              </group>
            </group>
          </group>
          <group position={[-9.29, -6.1, 0.48]} rotation={[-0.69, 0, 2.7]}>
            <group position={[0, 41.3, 0]} rotation={[-2.24, -0.29, 0]}>
              <group position={[0, 34.74, 0]} rotation={[2.27, -0.03, 0.21]}>
                <group position={[0, 18.67, 0]} rotation={[1.22, -0.06, 0.03]} />
              </group>
            </group>
          </group>
        </group>
        <mesh geometry={nodes.Ch24.geometry} material={materials.Ch24_Body} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
