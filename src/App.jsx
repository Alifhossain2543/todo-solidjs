import {ErrorBoundary, createSignal} from 'solid-js'
import Header from './components/Header'
import { Routes, Route } from "solid-app-router"
import AllNotes from './pages/AllNotes'
import Home from './pages/Home'

function App() {
  const [key] = createSignal(10)


  return (
    <>
        <Header />
        {/* we can declare all the routes with pages here. */}

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add-note' element={<AllNotes/>} />
    </Routes>
  
    </>
  )
}

export default App;
