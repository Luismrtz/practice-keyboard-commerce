import { CssBaseline } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";
import { routes } from "../config/router";

// import { CartSection } from '../components';
import { Navbar } from '../components';

// import { commerce } from '../lib/commerce';

const App: React.FC<{}> = (props) => {
  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  //   const {data} = await commerce.products.list();
  //   setProducts(data);
  // }

  // useEffect(() => {
  //   fetchProducts();
  //   return () => {
  //   }
  // }, [])
  // console.log(products);

  // console.log(products[0])

  return (
    <div>
          <CssBaseline>
        <BrowserRouter>
        <Navbar />
        {/* <CartSection/> */}
          <Switch>
            {/* //todo for specific redirections? wip */}
            <Redirect exact from="/details" to="/" />
            <Redirect exact from="/info" to="/" />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </div>
  );
}

export default App;
