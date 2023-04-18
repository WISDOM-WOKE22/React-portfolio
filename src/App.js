// import { Route, Routes } from 'react-router-dom'

// components
import PortfolioPage from './Page/PortfolioPage';
import Nav from './components/Nav';
import InCompleteProject from './Page/IncompleteProject/InCompleteProject';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <PortfolioPage/>
    </div>
  );
}

export default App;
