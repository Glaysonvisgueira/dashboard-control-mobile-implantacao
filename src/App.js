import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";

function App() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Route path="/" exact component={ControlMobileDashboard} />
          {/* <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} /> */}
        </Switch>
      
  </BrowserRouter>
  );
}

export default App;
