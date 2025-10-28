import { useEffect } from 'react'

export default function HubspotForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: import.meta.env.PUBLIC_HUBSPOT_PORTAL_ID,
          formId: import.meta.env.PUBLIC_HUBSPOT_FORM_ID,
          target: '#hubspot-form'
        })
      }
    }
    document.body.appendChild(script)
  }, [])

  return <div id="hubspot-form" className="max-w-xl mx-auto" />
}