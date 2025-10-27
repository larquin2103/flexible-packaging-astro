import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Gallery3D() {
  const mount1 = useRef(null)
  const mount2 = useRef(null)
  const mount3 = useRef(null)

  useEffect(() => {
    [mount1, mount2, mount3].forEach((mount, i) => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(300, 300)
      mount.current.appendChild(renderer.domElement)

      const geom = [ [2,3,0.5], [2,2,2], [1.5,3,1] ][i]
      const geo = new THREE.BoxGeometry(...geom)
      const mat = new THREE.MeshPhongMaterial({ color: [0x00ff88, 0xff8800, 0x8800ff][i] })
      const mesh = new THREE.Mesh(geo, mat)
      scene.add(mesh)

      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(5,5,5)
      scene.add(light)

      camera.position.z = 5

      function animate() {
        requestAnimationFrame(animate)
        mesh.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    })
  }, [])

  return (
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Explora nuestros productos en 3D</h2>
        <div class="grid md:grid-cols-3 gap-8 justify-items-center">
          <div><div ref={mount1} class="w-72 h-72 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-lg" /></div>
          <div><div ref={mount2} class="w-72 h-72 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl shadow-lg" /></div>
          <div><div ref={mount3} class="w-72 h-72 bg-gradient-to-br from-purple-100 to-orange-100 rounded-xl shadow-lg" /></div>
        </div>
      </div>
    </section>
  )
}