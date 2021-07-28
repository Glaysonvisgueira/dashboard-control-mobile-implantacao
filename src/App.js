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
import { PageNotFound } from './components/PageNotFound';

import  PrivateRoute from './components/PrivateRoute';
import  PublicRoute from './components/PublicRoute';


import {history} from './history'

function App() {
  return (
    <BrowserRouter history={history} >     
        <Switch>          
          <PublicRoute path="/login" exact component={Login} /> 
          <PrivateRoute path="/sobre" exact component={Sobre} /> 
          
          <Route path="/" exact component={HomePage} /> 
          <Route path="/mapa/depositos" exact component={Mapa} /> 
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
