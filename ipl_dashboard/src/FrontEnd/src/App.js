import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import { MatchPage } from './Pages/MatchPage';
import { TeamPage } from './Pages/TeamPage';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* Switch is replaced fto routes in react-router-domV6*/}
      <Router>
          <Routes>
            <Route path="/teams/:teamName/matches/:year" element={<MatchPage/>} /> 
            <Route path="/teams/:teamName" element={<TeamPage/>}/>  
            <Route path="/" element={<HomePage />} />     
          </Routes>
        
      </Router>

    </div>
  );
}

export default App;
