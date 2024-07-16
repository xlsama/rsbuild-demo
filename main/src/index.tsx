// 主应用
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Garfish from 'garfish'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function main() {
  Garfish.run({
    basename: '/',
    domGetter: '#subApp',
    disablePreloadApp: true,
    apps: [
      {
        name: 'react',
        activeWhen: '/react',
        entry: 'http://localhost:3001', // html入口
      },
    ],
  })

  const rootEl = document.getElementById('root')
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl)
    root.render(
      <React.StrictMode>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: '/',
              element: <App />,
              children: [
                {
                  path: 'react',
                  element: <div id="subApp" />,
                },
              ],
            },
          ])}
        />
      </React.StrictMode>,
    )
  }
}

main()
