import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'

import './styles/global.css';

import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { DashboardList } from "./pages/DashboardList";
import { FaseDois } from "./pages/FaseDois";
import { ControlMobileDashboard } from "./pages/ControlMobileDashboard";
import { ListaDepositos } from "./pages/ListaDepositos";
import { DetalhesDeposito } from "./pages/DetalhesDeposito";
import { Sobre } from "./pages/Sobre";
import { Mapa } from "./pages/Mapa";

import {history} from './history'
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter history={history} >     
        <Switch>          
          <Route path="/" exact component={HomePage} /> 
          <Route path="/login" exact component={Login} /> 
          <Route path="/mapa/depositos" exact component={Mapa} /> 
          <Route path="/sobre" exact component={Sobre} /> 
          <Route path="/depositos" exact component={ListaDepositos} /> 
          <Route path="/depositos/:sigla_dep" exact component={DetalhesDeposito} />         
          <Route path="/dashboards" exact component={DashboardList} />
          <Route path="/dashboards/controlmobile" exact component={ControlMobileDashboard} />
          <Route path="/dashboards/geral" exact component={FaseDois} />  

           <Route component={PageNotFound} />        
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
