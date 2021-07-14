import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { HomePage } from "./pages/HomePage";
import { DashboardList } from "./pages/DashboardList";
import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { FaseDoisDashboard } from "./pages/FaseDoisDashboard";


function App() {
  return (
    <BrowserRouter>     
        <Switch>
          <Route path="/" exact component={HomePage} />          
          <Route path="/dashboards" exact component={DashboardList} />
          <Route path="/dashboards/controlmobile" exact component={ControlMobileDashboard} />
          <Route path="/dashboards/geral" exact component={FaseDoisDashboard} />         
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
