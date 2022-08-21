import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default MyApp
