import PageNotFound from "./pages/notfound";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteid'>
          <QuoteDetail />
        </Route>
        <Route path='/newquotes'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
        </Switch>
      </Layout>
  );
}

export default App;
