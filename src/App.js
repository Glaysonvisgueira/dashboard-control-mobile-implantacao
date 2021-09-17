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
import { DepositosInfo } from "./pages/DepositosInfo";
import { SenhasBaseDeposito } from "./pages/SenhasBaseDeposito";

import { PageNotFound } from './components/PageNotFound';
import  PrivateRoute from './components/PrivateRoute';
import  PublicRoute from './components/PublicRoute';
 


function App() {
  return (
    <BrowserRouter  >     
        <Switch>          
          <PublicRoute path="/login" exact component={Login} /> 
          
          <PrivateRoute path="/tabela" exact component={DepositosInfo} />    
          <PrivateRoute path="/sobre" exact component={Sobre} />           
          <PrivateRoute path="/" exact component={HomePage} /> 
          <PrivateRoute path="/mapa/depositos" exact component={Mapa} /> 
          <PrivateRoute path="/depositos" exact component={ListaDepositos} /> 
          <PrivateRoute path="/depositos/:sigla_dep" exact component={DetalhesDeposito} />         
          <PrivateRoute path="/dashboards" exact component={DashboardList} />
          <PrivateRoute path="/dashboards/controlmobile" exact component={ControlMobileDashboard} />
          <PrivateRoute path="/dashboards/geral" exact component={FaseDois} />
          <PrivateRoute path="/senhas" exact component={SenhasBaseDeposito} />      

          <PublicRoute component={PageNotFound} />        
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
