import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { RecoilTest } from "./components/pages/Recoil";
import { Tasks } from "./components/pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/recoil">
        <RecoilTest></RecoilTest>
      </Route>
      <Route path="/tasks">
        <Tasks></Tasks>
      </Route>
    </BrowserRouter>
  );
}

export default App;
