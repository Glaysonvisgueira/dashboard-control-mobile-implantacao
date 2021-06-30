import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { FaseDoisDashboard } from "./pages/FaseDoisDashboard";

function App() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Route path="/" exact component={ControlMobileDashboard} />
          <Route path="/geral" exact component={FaseDoisDashboard} />
          {/* <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} /> */}
        </Switch>
      
  </BrowserRouter>
  );
}

export default App;
