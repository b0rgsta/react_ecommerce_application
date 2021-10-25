import './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {createTheme, ThemeProvider} from '@mui/material';
import {purple} from '@mui/material/colors';
import styles from './App.module.scss';
import Home from './containers/Home';
import Product from './containers/Product';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageNotFound from './containers/PageNotFound';
import {createContext, useEffect, useState} from 'react';
import {db} from './services/firestore';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    }
  },
  spacing: 1,
  shape: {
    borderRadius: 8
  }
});

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //runs once every time page mounts
    const getProducts = async () => {
      const productsColRef = db.collection('products');
      //returns all docs(entries) from products collection
      const data = await productsColRef.get();
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getProducts();
  }, []);


  return (
    <Router>
      <div className={styles.App}>
        <ThemeProvider theme={theme}>
          <Header/>
          <ProductContext.Provider value={products}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product/:id" component={Product}/>
              <Route path="*" exact component={PageNotFound}/>
            </Switch>
          </ProductContext.Provider>
          <Footer/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
