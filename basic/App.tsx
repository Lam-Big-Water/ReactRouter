import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.tsx';
import About from './About.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    </BrowserRouter>
        
  )
}

export default App