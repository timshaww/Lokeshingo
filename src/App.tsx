import GameBoard from './components/GameBoard.tsx'
import './App.css'

function App() {

  return (
    <div className="space-y-2">
      <h1 className='text-indigo-400 font-mono text-6xl'>
        Lokeshingo  
      </h1>  
      <p className='font-mono border-b'>
        Its like Bingo, but Lokesh
      </p> 
      <GameBoard />
    </div>
    
  )
}

export default App
