import { useState } from 'react'
import ReactLogo from './assets/react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const store = window.customStore;
  store.subscribe(() => {
    setCount(store.getState().counter)
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>
          count is {count}
        </button>
        <p>
          dit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
