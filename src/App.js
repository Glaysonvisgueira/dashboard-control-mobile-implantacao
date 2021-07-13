import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { HomePage } from "./pages/HomePage";
import { CMdashboard } from "./pages/CMdashboard";
import { FaseDoisDashboard } from "./pages/FaseDoisDashboard";

import { DashboardTeste } from "./pages/DashboardTeste";

function App() {
  return (
    <BrowserRouter>     
        <Switch>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/" exact component={CMdashboard} />
          <Route path="/teste" exact component={DashboardTeste} />
          <Route path="/geral" exact component={FaseDoisDashboard} />         
        </Switch>      
  </BrowserRouter>
  );
}

export default App;
