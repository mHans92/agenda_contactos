
import AddContact from './components/addContact';
import Encabezado from './components/Encabezado';
import ListContactos from './components/listContactos';
import Buscador from './components/Buscador';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
     

      <Router>
          <Encabezado/>
          <Switch>
          <Route  path="/ListContactos">
            <ListContactos />
          </Route>
          <Route path="/AddContact">
            <AddContact />
          </Route>
          <Route  path="/Buscador">
            <Buscador />
          </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
