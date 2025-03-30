import './App.css'
import Navbar from './primary-components/Main-nav'

function App() {

  const Name = "shruti";

  return (
    <>
    <Navbar />
      <h1 className='font-bold text-[8vh] capitalize'>briliant software developer <span className='font-[900] uppercase'>{Name}</span></h1>
    </>
  )
}

export default App
