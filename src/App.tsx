import './App.css'
import Mainnav from './primary-components/Main-nav'

function App() {


  return (
    <>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className="bg-blue-500 p-4 text-white">
          <Mainnav />
        </div>
        <div className="bg-green-500 p-4 text-white"></div>
      </div>
    </>
  )
}

export default App
