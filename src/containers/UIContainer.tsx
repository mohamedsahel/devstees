import { ActionType } from 'lib/constants'
import { useReducer } from 'react'
import { createContainer } from 'unstated-next'

type UIStateType = {
  isCartOpen: boolean
}

const INITIAL_STATE: UIStateType = {
  isCartOpen: false,
}

const UIReducer: (state: UIStateType, action: ActionType) => UIStateType = (state, action) => {
  switch (action.type) {
    case 'cart/open':
      return {
        ...state,
        isCartOpen: true,
      }
    case 'cart/close':
      return {
        ...state,
        isCartOpen: false,
      }

    default:
      return state
  }
}

const useUI = () => {
  const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE)

  const openCart = (): void => dispatch({ type: 'cart/open' })
  const closeCart = (): void => dispatch({ type: 'cart/close' })

  return {
    ...state,
    openCart,
    closeCart,
  }
}

const UI = createContainer(useUI)

export default UI
