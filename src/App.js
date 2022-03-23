import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
// import store from "./store/auth-store";

function App() {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedin && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {isLoggedin ? <UserProfile /> : <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
