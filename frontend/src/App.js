import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import LandingPage from './pages/LandingPage/LandingPage';
import Notes from './pages/Notes/Notes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/notes" element={ <Notes/> }></Route>
    </Routes>

    <Footer/>
  </BrowserRouter>
)

export default App;
