import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TopNav from "./layout/top-nav";
import SideNav from "./layout/side-nav";
import Footer from "./layout/footer";

import Role from "./components/manageRole/role";
import EditRole from "./components/manageRole/editRole";

function App() {
  return (
    <Provider store={store}>
      <div className="topbar">
        {/* <TopNav /> */}
        <div className="d-flex align-items-stretch">
          <SideNav />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="containerbg container-fluid px-xl-5">
              <Switch>
                <Route exact path="/role" component={Role} />
                <Route exact path="/form" component={EditRole} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
