import './App.css'
import testImg from './assets/test.png'

const App = () => {
  return (
    <div>
      <h1>我是子应用</h1>

      <img src={testImg} alt="test.png" />
    </div>
  )
}

export default App
