import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { RecoilTest } from "./components/pages/Recoil";
import { ClassicalFetch, ReactQueryA, ReactQueryB } from "./components/pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/recoil">
        <RecoilTest></RecoilTest>
      </Route>
      <Route path="/tasks/a">
        {/* <ClassicalFetch></ClassicalFetch> */}
        <ReactQueryA />
      </Route>
      <Route path="/tasks/b">
        <ReactQueryB />
      </Route>
    </BrowserRouter>
  );
}

export default App;
