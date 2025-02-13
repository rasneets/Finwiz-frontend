import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import News from './components/news'
import Login from './pages/login'
import Register from './pages/register'
import Navbar from './components/navbar'
import About from './pages/about'
import Events from './pages/events'
import Footer from './components/footer'
import Caf from './pages/caf'
import { AuthProvider } from './context/AuthContext'
import Analytics from './pages/analytics'

function App() {
 

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/events' element={<Events/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/caf' element={<Caf/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    
    
  )
}

export default App

/*
/*import { useEffect,useState } from "react"
import axios from 'axios'
const App = ()=>{
    const[stocks,setStocks]=useState([])
const fetchStockPrices = async()=>{
    try {
        const response = await axios.get(
            "https://api.twelvedata.com/time_series?apikey=32f2849b042a43e582ed8d8bc8349d5d",
            {
                params:{
                    symbol:"MSFT,APPL,AA,AAA",
                    interval:"1min",
                    
                }
            }
        )
        const stockData = Object.entries(response.data).map(([symbol, data]) => ({
            symbol,
            price: parseFloat(data.values[0].close),
            prevPrice: parseFloat(data.values[1].close),
          }));
        setStocks(stockData)
    } catch (error) {
        console.log('error dfetching stockprices')
    }
    useEffect(() => { fetchStockPrices(); const interval = setInterval(fetchStockPrices, 60000); return () => clearInterval(interval); }, []);
}

    return(
  
    <>
    <div className="Home">
        <h1>Stock prices</h1>
        <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.symbol}
              style={{
                color: stock.price > stock.prevPrice ? "green" : "red",
              }}
            >
              <td>{stock.symbol}</td>
              <td>${stock.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </>
)
}
export default App
*/