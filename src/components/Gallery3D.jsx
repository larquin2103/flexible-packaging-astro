import { useState } from 'react'

const productos = [
  {
    name: 'Doypack personalizado',
    img:  '/images/productos/standup-pouch.webp',
    desc: 'Doypack con cierre zip y ventana transparente. Ideal para café, snacks alimentos.',
  },
  {
    name: 'Tubos Colapsibles',
    img:  '/images/productos/flat-bottom.webp',
    desc: 'Producto laminado 100% polietileno y reciclable para pasta dental y productos cosméticos.',
  },
  {
    name: 'Bolsas para café',
    img:  '/images/productos/spout-pouch.webp',
    desc: 'Bolsas para café laminadas y personalizadas según estructura del cliente, PET, AL, PEBD. Máxima barrera.',
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

export default function Gallery3D() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        {/*<h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Catálogo de Productos</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Imágenes reales de nuestros envases. Haz clic para ampliar y solicitar cotización.
        </p>*/}

        {/* Vista grande responsiva */}
        <div className="max-w-3xl mx-auto mb-8">
          <img
            src={productos[selected].img}
            alt={productos[selected].name}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="mt-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{productos[selected].name}</h3>
            <p className="text-gray-700 mb-4 text-sm md:text-base">{productos[selected].desc}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
              <a
                href="/#cotizar" class="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        {/* Miniaturas responsivas */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {productos.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 transition ${i === selected ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-400'}`}
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