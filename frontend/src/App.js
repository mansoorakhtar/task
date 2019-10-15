import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from './components/hoc/Layout/Layout';
import store from './store';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
            </Switch>
          </Layout>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
