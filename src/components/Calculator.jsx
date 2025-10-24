import { useState } from 'react'

export default function Calculator() {
  const [qty, setQty] = useState(5000)
  const [mat, setMat] = useState('BOPP')
  const [price, setPrice] = useState(0)

  const calc = () => {
    const base = { BOPP: 0.08, PET: 0.12, AL: 0.15 }[mat]
    setPrice((qty * base * 1.16).toFixed(2))
  }

  return (
    <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto my-12">
      <h3 class="text-2xl font-bold mb-6 text-center">Calcula tu Presupuesto</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Cantidad (unidades)</label>
          <input type="range" min="1000" max="100000" step="1000" value={qty} onChange={e => setQty(e.target.value)} class="w-full" />
          <span class="text-blue-600 font-bold">{Number(qty).toLocaleString()}</span>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Material</label>
          <select value={mat} onChange={e => setMat(e.target.value)} class="w-full p-3 border rounded-lg">
            <option value="BOPP">BOPP (brillante)</option>
            <option value="PET">PET (resistente)</option>
            <option value="AL">Aluminio (barrera total)</option>
          </select>
        </div>
        <button onClick={calc} class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition">Calcular Precio</button>
        {price > 0 && <div class="text-center mt-4 p-4 bg-green-100 rounded-lg"><p class="text-2xl font-bold text-green-800">${Number(price).toLocaleString()} MXN</p><p class="text-sm text-green-600">IVA incluido · Envío gratis</p></div>}
      </div>
    </div>
  )
}
