import './App.css'
import Navbar from './primary-components/Main-nav'

function App() {

  const Name = "shruti";

  return (
    <>
      <Navbar />
      <h1 className='font-[900] text-[8vh] uppercase'>{Name}</h1>
      <h3 className='text-xl capitalize font-[500]'>A briliant software developer</h3>
      <button className='capitalize text-[2vh] mt-5 bg-sky-500 px-4 py-2 rounded-[50px] text-white hover:bg-sky-800 transition delay-150 duration-200 ease-in-out'>click for more info</button>
    </>
  )
}

export default App
