import { useState } from 'react'

export default function Gallery3D() {
  // ← 1. Array con TUS imágenes y datos
  const productos = [
    {
      name: 'Doypack personalizado',
      img:  '/images/productos/standup-pouch.webp',
      desc: 'Doypack con cierre zip y ventana transparente. Ideal para café, snacks y superalimentos.',
    },
    {
      name: 'Tubos Colapsibles',
      img:  '/images/productos/flat-bottom.webp',
      desc: 'Producto laminado 100% polietileno y reciclable para pastadental y productos cosméticos.',
    },
    {
      name: 'Bosas para café',
      img:  '/images/productos/spout-pouch.webp',
      desc: 'Bolsas para café laminadas y personalizadas según estructura del cilente, PET, AL, PEBD. Máxima barrera.',
    },
    {
      name: 'Bobina Litografiada',
      img:  '/images/productos/bobina-litografiada.webp',
      desc: 'Bobinas BOPP/PET impresas en alta definición 8 colores según diseño del cliente.',
    },
    {
      name: 'Envase Aluminio',
      img:  '/images/productos/aluminio-pouch.webp',
      desc: 'Barrera total contra luz, oxígeno y humedad. Indicado para fermentos y alimentos.',
    },
    {
      name: 'Doypack Reciclable',
      img:  '/images/productos/recyclable-doypack.webp',
      desc: 'Mono-material recicla-1 o laminado. Sostenible y con la misma funcionalidad.',
    },
  ]

  const [selected, setSelected] = useState(0)

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Catálogo de Productos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Imágenes reales de nuestros envases. Haz clic para ampliar y descargar la ficha técnica.
        </p>

        {/* Vista grande */}
        <div className="max-w-3xl mx-auto mb-8">
          <img
            src={productos[selected].img}
            alt={productos[selected].name}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold mb-2">{productos[selected].name}</h3>
            <p className="text-gray-700 mb-4">{productos[selected].desc}</p>
            <div className="flex justify-center gap-4">
              <a
                href={`/fichas/${productos[selected].name.toLowerCase().replace(/ /g, '-')}.pdf`}
                download
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Descargar Ficha
              </a>
              <a href="/#cotizar" class="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="flex flex-wrap justify-center gap-4">
          {productos.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-28 h-28 rounded-xl overflow-hidden border-2 transition ${i === selected ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-400'}`}
              aria-label={p.name}
            >
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}