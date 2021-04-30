import { useEffect, useReducer } from 'react'
import { createContainer } from 'unstated-next'

import { ActionType } from 'lib/constants'

type CartStateType = {
  data: any[]
  isLoading: boolean
  isEmpty: boolean
  error: any
}

const INITIAL_STATE: CartStateType = {
  data: [],
  isLoading: true,
  isEmpty: true,
  error: null,
}

const CartReducer = (state: CartStateType, action: ActionType): any => {
  switch (action.type) {
    case 'cart/addItem':
      return {
        ...state,
        data: state.data.push(action.payload),
      }

    case 'cart/removeItem':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      }

    case 'cart/updateItem':
      return {
        ...state,
        data: state.data.map((item) =>
          item.id !== action.payload.id ? item : { ...item, ...action.payload }
        ),
      }

    default:
      return state
  }
}

const useCart = () => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)

  useEffect(() => {
    // fetch cart data
  }, [])

  const addItem = async (item: any): Promise<void> => {
    dispatch({ type: 'cart/addItem', payload: item })
    // add item to database
  }

  const removeItem = async (itemId: string): Promise<void> => {
    dispatch({ type: 'cart/removeItem', payload: itemId })
    // remove item to database
  }

  const updateItem = async (item: any): Promise<void> => {
    dispatch({ type: 'cart/updateItem', payload: item })
    // update item to database
  }

  return {
    ...state,
    addItem,
    removeItem,
    updateItem,
  }
}

const Cart = createContainer(useCart)

export default Cart
