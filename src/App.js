import Navbar from './components/Nav';
import './App.css';
import Footer from './components/Footer';
 import Home from './components/Home';
// import SearchPage from './components/SearchPage';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   {/* <Router>
    <Navbar/>
    <Routes>
    <Route path="/search">
            <h1>i am search</h1>
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
    <Footer/>
    </Router>
    </div> */}


        <Navbar />
        
            <Home />
        
        <Footer />
    </div>
  );
}

export default App;
