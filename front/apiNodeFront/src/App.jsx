
import './App.css'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Movie } from './components/pages/Movies/Movie';
import { User } from './components/pages/User/User';
import { UpMovie } from './components/pages/Movies/upMovie';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/movies" element={<Movie/>}/>
        <Route exact path="/user" element={<User/>}/>
        <Route exact path="/upmovie" element={<UpMovie/>}/>
      </Routes>
    </Router>
  )
}

export default App
