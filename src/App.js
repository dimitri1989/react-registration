import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App;
