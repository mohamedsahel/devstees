import { AppProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        hideProgressBar={true}
        autoClose={20000}
        style={{
          maxWidth: '90%',
          margin: '1rem',
        }}
      />
    </>
  )
}

export default MyApp
