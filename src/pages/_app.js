// import SocketProvider from '@/context/SocketProvider'
// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return (
//     <SocketProvider>
//       <Component {...pageProps} />
//     </SocketProvider>)
// }

// src/pages/_app.js
import dynamic from 'next/dynamic'
import '@/styles/globals.css'

// Load SocketProvider only in browser
const SocketProvider = dynamic(() => import('@/context/SocketProvider'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}
