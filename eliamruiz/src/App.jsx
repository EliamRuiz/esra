import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Hola");

  return (
    <div>
      <Hello text={text} />
      <button onClick={() => setText("adios")}>Adios</button>
    </div>
  );
  
}

export default App
