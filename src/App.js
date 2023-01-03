import "./App.css";
import { Authlayer, useAuthValue } from "./Context/Authcontext";
import Routerss from "./Routerss";

function App() {
  return (
    <Authlayer>
      <Routerss />
    </Authlayer>
  );
}

export default App;
