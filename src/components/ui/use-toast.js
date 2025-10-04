import { useState, useEffect } from 'react'

const DEFAULT_LIMIT = 3

let count = 0
function generateId() {
  return (++count).toString()
}

const toastStore = {
  state: { toasts: [] },
  listeners: [],
  getState() {
    return this.state
  },
  setState(nextState) {
    this.state = { ...this.state, ...nextState }
    this.listeners.forEach((listener) => listener(this.state))
  },
}

export function useToast(limit = DEFAULT_LIMIT) {
  const [state, setState] = useState(toastStore.getState())

  useEffect(() => {
    const listener = (newState) => setState(newState)
    toastStore.listeners.push(listener)

    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener)
    }
  }, [])

  const addToast = (message, type = 'info') => {
    const id = generateId()
    const newToast = { id, message, type }

    toastStore.setState({
      toasts: [newToast, ...toastStore.state.toasts].slice(0, limit),
    })
  }

  const removeToast = (id) => {
    toastStore.setState({
      toasts: toastStore.state.toasts.filter((t) => t.id !== id),
    })
  }

  return {
    ...state,
    addToast,
    removeToast,
  }
}
