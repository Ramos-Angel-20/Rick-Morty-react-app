import { Switch, Route } from 'react-router-dom';

import { useContext } from 'react';

import AppRouter from './components/AppRouter';
import { themeContext } from './store/themeContextProvider';



const App = () => {

  const themeCtx = useContext(themeContext);
  /*
                                                                      |||
    TODO: Hacer el toggle de la clase para dark mode en el primer div vvv

                                                              className='darktheme'
  */

  return (
    <main className={themeCtx.theme}>
      <AppRouter/>
    </main>
  );
}

export default App;
