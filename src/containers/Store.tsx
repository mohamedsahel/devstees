import { Cart, UI, Wishlist } from '.'
import { ToastContainer, toast } from 'react-toastify'

const RootContainer: React.FC = ({ children }) => (
  <>
    <UI.Provider>
      <Cart.Provider>
        <Wishlist.Provider>{children}</Wishlist.Provider>
      </Cart.Provider>
    </UI.Provider>
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

export default RootContainer
