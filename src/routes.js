import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import PageOne from './page1'
import PageTwo from './page2'
import PageThree from './page3'

import { RouteProvider } from './ContextB'

const Router = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Home (Fora do Contexto)</Link> | <Link to='/page2'>Page 2 (Mesmo Contexto do 3)</Link> | <Link to='/page3'>Page 3  (Mesmo Contexto do 2)</Link><br />
      <Switch>
        <Route path='/' exact component={PageOne} />
        <RouteProvider>
          <Route path='/page2' exact component={PageTwo} />
          <Route path='/page3' exact component={PageThree} />
        </RouteProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Router