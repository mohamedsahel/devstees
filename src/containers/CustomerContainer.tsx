import { useEffect, useReducer } from 'react'
import { createContainer } from 'unstated-next'

import { ActionType } from 'lib/constants'

type CustomerStateType = {
  data: any
  isLoading: boolean
  error: any
}

const INITIAL_STATE: CustomerStateType = {
  data: null,
  isLoading: true,
  error: null,
}

const CustomerReducer = (state: CustomerStateType, action: ActionType): any => {
  switch (action.type) {
    case 'customer/startLogin':
      return {
        ...state,
        isLoaing: true,
      }

    case 'customer/logout':
      return {
        ...INITIAL_STATE,
      }

    default:
      return state
  }
}

const useCustomer = () => {
  const [state, dispatch] = useReducer(CustomerReducer, INITIAL_STATE)

  useEffect(() => {
    // fetch Customer data
  })

  const login = async (): Promise<void> => {
    dispatch({ type: 'customer/startLogin' })
    // add item to database
  }

  const logout = async (): Promise<void> => {
    // remove item to database
    dispatch({ type: 'customer/logout' })
  }

  return {
    ...state,
    login,
    logout,
  }
}

const Customer = createContainer(useCustomer)

export default Customer
