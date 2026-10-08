import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Inicio from "./Componentes/Inicio";
import LigaAlemana from "./Componentes/LigaAlemana";

function App() {

  return (
    <Router>

      <nav className="c-menu">

        <Link to="/">Inicio</Link>
        <Link to="/ligaalemana">Liga Alemana</Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/ligaalemana"
          element={<Inicio />}
        />

        <Route
          path="/ligaalemana/:name"
          element={<LigaAlemana />}
        />

      </Routes>

    </Router>
  );
}

export default App;