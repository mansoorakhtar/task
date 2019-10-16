import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/hoc/layout/Layout';
import Tasks from './components/task/Listing';
import CreateTask from './components/task/Create';
import EditTask from './components/task/Edit';
import PageNotFound from './components/PageNotFound';
import store from './store';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
                <Route exact path="/" component={Tasks} />
                <Route exact path="/tasks/create" component={CreateTask} />
                <Route exact path="/tasks/:id/edit" component={EditTask} />
                <Route component={PageNotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
