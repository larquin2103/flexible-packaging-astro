import { useEffect } from 'react'

export default function HubspotForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "244032023",
          formId: "279c7ee3-2af5-4bbd-864e-07734436b8e0",
          target: '#hubspot-form'
        })
      }
    }
    document.body.appendChild(script)
  }, [])

  return <div id="hubspot-form" className="max-w-xl mx-auto" />
}