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

//defining global styling for materialUI components
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

//wrapped components below with ProductContext.Provider. provides access to Productcontext.
export const ProductContext = createContext();

function App() {

  // sets and stores products from db
  const [products, setProducts] = useState([]);

  //fetches products from DB
  const getProductsDB = async () => {
    const productsColRef = db.collection('products');
    //returns all docs(entries) from products collection
    const data = await productsColRef.get();
    //
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  useEffect(() => {
    //runs once when page mounts

    getProductsDB();
  }, []);

  //sends updated product to DB. called by setFavourite()
  const setProductDB = async (product) => {
    await db
      .collection('products')
      .doc(product.id)
      .set(product);
  };

  //given an id and fav-value, locates the products index and updates the
  //DB and product array local (for seamless user experience) with the updated favourite value.
  const setFavourite = async (id, newValue) => {
    const productIndex = products.findIndex((item) => {
      return item.id === id;
    });

    const updatedProductArray = [...products];
    updatedProductArray[productIndex].favourite = newValue;
    //updates DB
    await setProductDB(updatedProductArray[productIndex]);
    //updates Local
    setProducts(updatedProductArray);
  };

  return (
    <Router>
      <div className={styles.App}>
        <ThemeProvider theme={theme}>
          <Header/>
          <ProductContext.Provider value={{products, setFavourite}}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product/:id" component={Product}/>
              <Route path="*" exact component={PageNotFound}/>
            </Switch>
          </ProductContext.Provider>

        </ThemeProvider>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
