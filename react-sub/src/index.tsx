// react 子应用
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { reactBridge } from '@garfish/bridge-react-v18'

export const provider = reactBridge({
  el: '#root',
  rootComponent: App,
})

// 子应用独立运行
if (!window.__GARFISH__) {
  const rootEl = document.getElementById('root')
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}
