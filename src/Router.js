import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from 'store'
import { Layout } from 'components/'

export default () => (
<BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Layout}></Route>
      </Switch>
    </Provider>
</BrowserRouter>
)
