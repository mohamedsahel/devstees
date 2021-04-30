import { Cart } from 'components'
import { AppProps } from 'next/app'
import Store from 'containers/Store'
import 'react-toastify/dist/ReactToastify.css'

import 'styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Store>
      <Component {...pageProps} />
      <Cart />
    </Store>
  )
}

export default MyApp
