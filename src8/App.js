import {Route, Switch, Redirect} from 'react-router-dom'
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetails';
import Prodcuts from './pages/Products';
import Welcome from './pages/Welcome';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Prodcuts />
          </Route>
          <Route path="/products/:productid">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
