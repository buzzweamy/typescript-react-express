import React = require('react');
import { Route } from 'react-router';

import App from './containers/App';

export default function() {
    return (
        <Route path='/' component={App}>
        </Route>
    )
}
