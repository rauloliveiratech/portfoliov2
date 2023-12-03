import { useState } from 'react'
import MainContent from './components/MainContent.jsx'
import Sidebar from './components/sidebar.jsx'

import './styles/components/app.sass'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='portfolio'>
      <h1>Raul Oliveira</h1>
      <Sidebar />
      <MainContent />
    </div>
      )
}

export default App
