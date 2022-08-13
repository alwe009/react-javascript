import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from './pages/SumOfNatural';
import TotalOfDigits from './pages/TotalOfDigits';
import CheckWithin100To500 from './pages/CheckWithin100To500';
import RightTriangle from './pages/RightTriangle';
import Triangle from './pages/Triangle';
import NumberRightTriangle from './pages/NumberRightTriangle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci/>} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural-numbers' element={<SumOfNatural />} />
        <Route path='/sum-of-digits' element={<TotalOfDigits />} />
        <Route path='/check-within-100To500' element={<CheckWithin100To500 />} />
        <Route path='/right-triangle' element={<RightTriangle />} />
        <Route path='/triangle' element={<Triangle />} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;