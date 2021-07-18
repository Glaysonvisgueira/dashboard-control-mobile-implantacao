import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { HomePage } from "./pages/HomePage";
import { DashboardList } from "./pages/DashboardList";
import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { MapaDepositos } from "./pages/MapaDepositos";
import { ListaDepositos } from "./pages/ListaDepositos";
import { FaseDoisDashboard } from "./pages/FaseDoisDashboard";

import { FaseDois } from "./pages/FaseDois";


function App() {
  return (
    <BrowserRouter>     
        <Switch>          
          <Route path="/" exact component={HomePage} /> 
          <Route path="/depositos" exact component={ListaDepositos} /> 
          <Route path="/mapa/depositos" exact component={MapaDepositos} />         
          <Route path="/dashboards" exact component={DashboardList} />
          <Route path="/dashboards/controlmobile" exact component={ControlMobileDashboard} />
          <Route path="/dashboards/geral" exact component={FaseDois} />         
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
