import './App.css'
import Mainnav from './primary-components/Main-nav'
import Secondnavbar from './primary-components/Second-nav'

function App() {


  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-blue-500 p-4 flex-1 text-white h-full'>
          <Mainnav />
        </div>
        <div className='bg-green-500 p-4 flex-2 text-white'>
          <Secondnavbar />
        </div>
        <div className='bg-red-500 p-4 flex-15 text-white'>
          <Secondnavbar />
        </div>
      </div>
    </>
  )
}

export default App
