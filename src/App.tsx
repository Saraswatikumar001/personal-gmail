import './App.css'
import Mainnav from './primary-components/Main-nav'
import Secondnavbar from './primary-components/Second-nav'
import Defaultcontent from './secondary-component/Default-content'

function App() {


  return (
    <>
      <div className='flex flex-col md:flex-row h-[100vh]'>
        <div className='flex-1 text-white h-full bg-[#e9eef6]'>
          <Mainnav />
        </div>
        <div className='flex-3 text-white'>
          <Secondnavbar />
        </div>
        <div className='p-4 flex-14 text-white'>
        <Defaultcontent/>
        </div>
      </div>
    </>
  )
}

export default App
