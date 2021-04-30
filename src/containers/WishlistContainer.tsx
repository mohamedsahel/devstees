import { useEffect, useReducer } from 'react'
import { createContainer } from 'unstated-next'

import { ActionType } from 'lib/constants'

type WishlistStateType = {
  data: any[]
  isLoading: boolean
  isEmpty: boolean
  error: any
}

const INITIAL_STATE: WishlistStateType = {
  data: [],
  isLoading: true,
  isEmpty: true,
  error: null,
}

const WishlistReducer = (state: WishlistStateType, action: ActionType): any => {
  switch (action.type) {
    case 'wishlist/addItem':
      return {
        ...state,
        data: state.data.push(action.payload),
      }

    case 'wishlist/removeItem':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      }

    default:
      return state
  }
}

const useWishlist = () => {
  const [state, dispatch] = useReducer(WishlistReducer, INITIAL_STATE)

  useEffect(() => {
    // fetch Wishlist data
  }, [])

  const addItem = async (item: any): Promise<void> => {
    dispatch({ type: 'wishlist/addItem', payload: item })
    // add item to database
  }

  const removeItem = async (itemId: string): Promise<void> => {
    dispatch({ type: 'wishlist/removeItem', payload: itemId })
    // remove item to database
  }

  return {
    ...state,
    addItem,
    removeItem,
  }
}

const Wishlist = createContainer(useWishlist)

export default Wishlist
