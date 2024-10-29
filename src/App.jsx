
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import MyNav from './components/MyNav/MyNav'
import DesyNavbar from './components/DesyNavbar/DesyNavbar'
import StateShow from './components/StateShow/StateShow'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {

  return (
    <>
    <div className='md:max-w-7xl mx-auto'>

    <MyNav></MyNav>
      <h1 className='text-5xl font-bold text-center bg-purple-400 p-3'>Price Option</h1>
     <DesyNavbar></DesyNavbar>
      <HeroSection></HeroSection>

     <PriceOptions></PriceOptions>

      <StateShow></StateShow>

      <LineChart></LineChart>

      <Phones></Phones>
      
    </div>
    </>
  )
}

export default App
