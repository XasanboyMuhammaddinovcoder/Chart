import { useState } from 'react'
import './App.css'
import { LineChart } from './componenst/Charts/LineChart'
import { LineChartTwo } from './componenst/Charts/LineChartTwo'
import { LineChartTHere } from './componenst/Charts/LineChartThere'
import { LineChartFour } from './componenst/Charts/LineChartFour'
import { LineChartFife } from './componenst/Charts/LineChartFife'
import { LineChartS } from './componenst/Charts/LineChartS'
import { LineChartFifty } from './componenst/Charts/LineChartFifty'
import { LineChartHandred } from './componenst/Charts/LineChartHand'
// import LineChart from './componenst/Charts/LineChart'

function App() {
  const [active , setActive] = useState('12H')

  return (
    <>
    <div className='section'>
      <header className='header'>
        <ul>
          <li style={{background: `${active == '12H' ? 'blue' : 'white'}`, color: `${active == '12H' ? 'white' : 'black'}`}} onClick={() => setActive('12H')}>12H</li>
          <li style={{background: `${active == '1D' ? 'blue' : 'white'}`, color: `${active == '1D' ? 'white' : 'black'}`}} onClick={() => setActive('1D')}>1D</li>
          <li style={{background: `${active == '1W' ? 'blue' : 'white'}`, color: `${active == '1W' ? 'white' : 'black'}`}} onClick={() => setActive('1W')}>1W</li>
          <li style={{background: `${active == '1M' ? 'blue' : 'white'}`, color: `${active == '1M' ? 'white' : 'black'}`}} onClick={() => setActive('1M')}>1M</li>
          <li style={{background: `${active == '1Y' ? 'blue' : 'white'}`, color: `${active == '1Y' ? 'white' : 'black'}`}} onClick={() => setActive('1Y')}>1Y</li>
          <li style={{background: `${active == '2Y' ? 'blue' : 'white'}`, color: `${active == '2Y' ? 'white' : 'black'}`}} onClick={() => setActive('2Y')}>2Y</li>
          <li style={{background: `${active == '5Y' ? 'blue' : 'white'}`, color: `${active == '5Y' ? 'white' : 'black'}`}} onClick={() => setActive('5Y')}>5Y</li>
          <li style={{background: `${active == '10Y' ? 'blue' : 'white'}`, color: `${active == '10Y' ? 'white' : 'black'}`}} onClick={() => setActive('10Y')}>10Y</li>
        </ul>
      </header>
      <div className="hero">
        {
          active == '12H' && <LineChart></LineChart>
        }
        {
          active == '1D' && <LineChartTwo></LineChartTwo>
        }
        {
          active == '1W' && <LineChartTHere></LineChartTHere>
        }
        {
          active == '1M' && <LineChartFour></LineChartFour>
        }
        {
          active == '1Y' && <LineChartFife></LineChartFife>
        }
        {
          active == '2Y' && <LineChartS></LineChartS>
        }
        {
          active == '5Y' && <LineChartFifty></LineChartFifty>
        }
        {
          active == '10Y' && <LineChartHandred></LineChartHandred>
        }
      </div>
    </div>
    </>
  )
}

export default App
