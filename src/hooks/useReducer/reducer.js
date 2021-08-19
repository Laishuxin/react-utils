import { DECREMENT, INCREMENT, RESET } from './action'
export const initialState1 = 0
export const reducer1 = (state, action) => {
  switch (action) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    case RESET:
      return initialState1
  }
  return state
}

export const initialState2 = { value: 0 }
export const reducer2 = (state, action) => {
  const { value } = state
  const { type } = action
  switch (type) {
    case INCREMENT:
      return { ...state, value: value + 1 }
    case DECREMENT:
      return { ...state, value: value - 1 }
    case RESET:
      return initialState2
  }
  return state
}

export const initialState3 = { value: 0 }
export const reducer3 = (state, action) => {
  const { value } = state
  let { type, step = 0 } = action
  if (typeof step === 'string') step = parseFloat(step) || 0
  switch (type) {
    case INCREMENT:
      return { ...state, value: value + step }
    case DECREMENT:
      return { ...state, value: value - step }
    case RESET:
      return initialState3
  }
  return state
}

export const initialState4 = { value: 0 }
export const reducer4 = (state, action) => {
  const { value } = state
  let { type, step = 0 } = action
  if (typeof step === 'string') step = parseFloat(step) || 0
  switch (type) {
    case INCREMENT:
      return { ...state, value: value + step }
    case DECREMENT:
      return { ...state, value: value - step }
    case RESET:
      return initialState4
  }
  return state
}
