
import Home from "./pages/home/Home";
import TopBar from "./topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    // <>

    //  {/* <TopBar /> */}
    //  {/* <Home/> */}
    // {/* <Single/> */}
    // {/* <Write/> */}
    // {/* <Settings/> */}
    // <Login/>
    // {/* <Register/> */}

    // {/* </> */}

    <Router>
      <TopBar />

      <Switch>

        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/register">
        { user ? <Home/> : <Register />}
        </Route>

        <Route path="/login">
        { user ? <Home/> : <Login />}
        </Route>

        <Route path="/write">
        { user ? <Write/> : <Register />}
        </Route>

        <Route path="/settings">
        { user ? <Settings/> : <Register />}
        </Route>

        <Route path="/post/:postId">
        <Single />
        </Route>
        
      </Switch>

    </Router>






  );
}

export default App;