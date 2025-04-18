import './App.css'
import Mainnav from './primary-components/Main-nav'
import Secondnavbar from './primary-components/Second-nav'

function App() {


  return (
    <>
      <div className='flex flex-col md:flex-row h-[100vh]'>
        <div className='flex-1'>
          <Mainnav />
        </div>
        <div className='flex-2'>
          <Secondnavbar />
        </div>
        <div className='flex-15'>
          <Secondnavbar />
        </div>
      </div>
    </>
  )
}

export default App
