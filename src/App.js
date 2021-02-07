/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import Home from './react-components/Home';
import About from './react-components/About-Me';
import Contact from './react-components/Contact-Me';
import Projects from './react-components/Projects';
import Travel from './react-components/Travel';

class App extends React.Component {

  render() {
    return (
        <div>
        <HashRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => (<Home/>)}/>
            <Route exact path='/Home' render={() => (<Home/>)}/>            
            <Route exact path='/About-Me' render={() => (<About/>)}/>
            <Route exact path='/Contact-Me' render={() => (<Contact/>)}/>
            <Route exact path='/Projects' render={() => (<Projects/>)}/>
            <Route exact path='/Travel-Gallery' render={() => (<Travel/>)}/>
          </Switch>
        </HashRouter>
      </div>
    );  
  }
}

export default App;
