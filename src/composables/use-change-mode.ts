class Store {
  constructor(private label: string, private color: string) {}
  get() {
    return {
      label: this.label,
      color: this.color
    }
  }
}

let store: Store
export function useChangeMode(label: string, color: string) {
  if (!store) {
    store = new Store(label, color)
  }

  const changeLabel = store.get().label !== label ? store.get().label : 'KIDS MODE'
  const changeButtonColor = store.get().color !== color ? store.get().color : 'success'

  return {
    changeLabel,
    changeButtonColor,
  }
}
