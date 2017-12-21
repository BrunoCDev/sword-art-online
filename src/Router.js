import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from 'store'
import { Home } from 'components/'

export default () => (
<BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Provider>
</BrowserRouter>
)


