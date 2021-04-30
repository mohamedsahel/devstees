import { UI } from 'containers'

const Cart: React.FC<any> = () => {
  const { isCartOpen } = UI.useContainer()
  console.log('isCartOpen :>> ', isCartOpen)
  return <section>Cart</section>
}

export default Cart
