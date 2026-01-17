import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script' // Importez Script pour la performance

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Script Umami */}
      <Script 
        async 
        src="https://cloud.umami.is/script.js" 
        data-website-id="e7b53df7-ac74-49a4-b3d6-1ab2c74770d6" 
      />
      
      <Component {...pageProps} />
    </>
  )
}