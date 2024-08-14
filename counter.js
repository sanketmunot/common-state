import { store } from "./store"

export function setupCounter(element) {
  const paintCounter = () => {
    element.innerHTML = `count is ${store.getState().counter}`
  }
  const incCounter = () => {
    store.dispatch({type: 'INCREMENT'})
  }
  store.subscribe(paintCounter)

  element.addEventListener('click', () => incCounter())
  paintCounter() // initial paint
}
