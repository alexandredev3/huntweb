import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

export default function Routes() {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/products/:id" component={Product} />
            </Switch>
        </BrowserRouter>
    );
};

// BrowserRouter: Ele vai indicar que nos estamos usando o router em um Browser.
// Switch: Ele vai permite que nos chamamos apenas uma rota de cada vez.
