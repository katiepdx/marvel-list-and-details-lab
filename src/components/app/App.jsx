import React from 'react';
// Import react-router-dom 
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import ListPage from './ListPage';
import DetailPage from './DetailPage';


export default function App() {
  return (
    <div>
      Welcome!!!!
      <Router>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ListPage">All Characters</Link></li>
          <li><Link to="/DetailPage">Details</Link></li>
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

