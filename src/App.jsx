import { useState } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/sidebar'

import './styles/components/app.sass'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='portfolio'>
      <h1>Raul Oliveira Mercadante</h1>
      <Sidebar />
      <MainContent />
    </div>
      )
}

export default App
