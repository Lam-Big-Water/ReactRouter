import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.tsx';
import About from './About.tsx';
import Items from './Item.tsx';
import Details from './Details.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/items">Items</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/items/:id' element={<Details />}/>          
        </Routes>
    </BrowserRouter>
        
  )
}

export default App