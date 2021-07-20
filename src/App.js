import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { DashboardList } from "./pages/DashboardList";
import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { ListaDepositos } from "./pages/ListaDepositos";
import { DetalhesDeposito } from "./pages/DetalhesDeposito";

import { FaseDois } from "./pages/FaseDois";


function App() {
  return (
    <BrowserRouter>     
        <Switch>          
          <Route path="/" exact component={HomePage} /> 
          <Route path="/login" exact component={Login} /> 
          <Route path="/depositos" exact component={ListaDepositos} /> 
          <Route path="/depositos/:sigla_dep" exact component={DetalhesDeposito} />         
          <Route path="/dashboards" exact component={DashboardList} />
          <Route path="/dashboards/controlmobile" exact component={ControlMobileDashboard} />
          <Route path="/dashboards/geral" exact component={FaseDois} />         
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
