import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { OCFCProvider } from '../context/ocfc'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <OCFCProvider>
      <Component {...pageProps} />
    </OCFCProvider>
  )
}
