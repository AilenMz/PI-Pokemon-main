import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LangindPage from './Components/LandingPage/landingPage.jsx'
import Home from './Components/Home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        
        <Route exact path= '/' component={LangindPage}/>
        <Route exact path= '/home' component={Home}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
