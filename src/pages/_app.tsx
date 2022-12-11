import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { OCFCProvider } from '../context/ocfc'
import { ActiveTabProvider } from '../context/activeTab'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ActiveTabProvider>
      <OCFCProvider>
        <Component {...pageProps} />
      </OCFCProvider>
    </ActiveTabProvider>
  )
}
