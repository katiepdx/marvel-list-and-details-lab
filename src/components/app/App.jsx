import React from 'react';
// Import react-router-dom 
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css'

import ListPage from './ListPage';
import DetailPage from './DetailPage';


export default function App() {
  return (
    <div>
      <Router>
        <nav className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ListPage">All Characters</Link></li>
          <li><Link to="/DetailPage/:characterId">Details</Link></li>
        </nav>
        <Switch>
          <Route
            // Switch to the ListPage
            path="/ListPage"
            exact
            render={(routerProps) => <ListPage {...routerProps}/>}
          />
          <Route
            // Switch to the DetailPage for the id
            path="/DetailPage/:characterId"
            exact
            render={(routerProps) => <DetailPage {...routerProps}/>}
          />
        </Switch>
      </Router>
    </div>
  )
}

