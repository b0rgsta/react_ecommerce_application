import './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {createTheme, ThemeProvider} from '@mui/material';
import {purple} from '@mui/material/colors';
import styles from './App.module.scss';
import Home from './containers/Home';

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

function App() {
  return (
    <div className={styles.App}>
      <ThemeProvider theme={theme}>
        <Header/>
        <Home/>
        <Footer/>

      </ThemeProvider>
    </div>
  );
}

export default App;
