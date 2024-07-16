import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'

const App = () => {
  const navigate = useNavigate()

  return (
    <div className="content">
      <div>
        <button style={{ width: 100, height: 50 }} type="button" onClick={() => navigate('/react')}>
          跳转到 /react
        </button>
        <button
          style={{ width: 100, height: 50, marginLeft: 20 }}
          type="button"
          onClick={() => navigate('/')}
        >
          跳转到 /
        </button>
      </div>
      <h1>我是主应用</h1>

      <Outlet />
    </div>
  )
}

export default App
