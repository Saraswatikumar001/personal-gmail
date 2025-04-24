import './App.css'
import Mainnav from './primary-components/Main-nav'
import Secondnavbar from './primary-components/Second-nav'

function App() {


  return (
    <>
      <div className='flex flex-col md:flex-row h-[100vh]'>
        <div className='p-4 flex-1 text-white h-full'>
          <Mainnav />
        </div>
        <div className='p-4 flex-2 text-white'>
          <Secondnavbar />
        </div>
        <div className='p-4 flex-15 text-white'>
          <Secondnavbar />
        </div>
      </div>
    </>
  )
}

export default App
