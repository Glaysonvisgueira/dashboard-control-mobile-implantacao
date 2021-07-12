import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.css';

import { CMdashboard } from "./pages/CMdashboard";
import { FaseDoisDashboard } from "./pages/FaseDoisDashboard";
import { UpdateControlMobileDashboard } from "./pages/UpdateControlMobileDashboard";

function App() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Route path="/" exact component={CMdashboard} />
          <Route path="/geral" exact component={FaseDoisDashboard} />
          <Route path="/update/controlmobile" exact component={UpdateControlMobileDashboard} />
         
        </Switch>
      
  </BrowserRouter>
  );
}

export default App;
