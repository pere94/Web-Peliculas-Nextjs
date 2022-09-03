import '../styles/globals.css'
import {Nav} from '../templates/Nav';
import {AppContext } from "../context/AppContext";
import {useInitialState} from "../hooks/useInitialState";

// import { store } from '/src/app/store'
// import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  
  const initialState = useInitialState();
  

  return (
    // <Provider store={store}>
      <AppContext.Provider value={initialState}>
        <div className={`${initialState.darkMode ? 'dark' : ''}`}>
          <Nav 
            navLinks={[
              'Locations',
              'Stays',
              'FAQs',
              'About Us',
            ]}
          />
          <Component {...pageProps} />
        </div>
      </AppContext.Provider>
    // </Provider>

);}

export default MyApp
