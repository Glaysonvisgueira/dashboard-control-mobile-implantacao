import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { DashboardList } from "./pages/DashboardList";
import { FaseDois } from "./pages/FaseDois";
import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { ListaDepositos } from "./pages/ListaDepositos";
import { DetalhesDeposito } from "./pages/DetalhesDeposito";
import { Sobre } from "./pages/Sobre";



function App() {
  return (
    <BrowserRouter>     
        <Switch>          
          <Route path="/" exact component={HomePage} /> 
          <Route path="/login" exact component={Login} /> 
          <Route path="/sobre" exact component={Sobre} /> 
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
