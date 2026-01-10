import { createContext, useEffect } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  useEffect(() => {
    // inject preconnects + stylesheet for DM Sans if not already present
    if (!document.querySelector('link[data-theme="dm-sans-preconnect"]')) {
      const p1 = document.createElement('link')
      p1.setAttribute('rel', 'preconnect')
      p1.setAttribute('href', 'https://fonts.googleapis.com')
      p1.setAttribute('data-theme', 'dm-sans-preconnect')
      document.head.appendChild(p1)

      const p2 = document.createElement('link')
      p2.setAttribute('rel', 'preconnect')
      p2.setAttribute('href', 'https://fonts.gstatic.com')
      p2.setAttribute('crossorigin', '')
      p2.setAttribute('data-theme', 'dm-sans-preconnect')
      document.head.appendChild(p2)

      const css = document.createElement('link')
      css.setAttribute('rel', 'stylesheet')
      css.setAttribute(
        'href',
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
      )
      css.setAttribute('data-theme', 'dm-sans-stylesheet')
      document.head.appendChild(css)
    }

    // set CSS var and apply font to body (keeps precedence over existing rules)
    const fontFamily = `"DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
    document.documentElement.style.setProperty('--app-font', fontFamily)
    document.body.style.fontFamily = fontFamily

    // cleanup is not required for persistent theme
  }, [])

  return (
    <ThemeContext.Provider value={null}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
