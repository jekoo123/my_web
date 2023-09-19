import { Header } from "./components/header/header.tsx";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Main } from "./pages/main.tsx";
import { Resume } from "./pages/resume/resume.tsx";
import { Lobby } from "./pages/pokemon/pokemonLobby.tsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/main" />}
          // errorElement={<Error />}
        />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/lobby" element={<Lobby />} />
      </Routes>
    </Router>
  );
}
