import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home></Home>
                </Route>
                <Route path='/dashboard'>
                    <Dashboard></Dashboard>
                </Route>

            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
