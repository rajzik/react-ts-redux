import React from 'react';
import { Router } from '@reach/router';
import { pages } from '../../Const';

export default () => (
    <Router>
        {
            pages.map(({Component, ...rest}) => (
                <Component {...rest} />
            ))
        }
    </Router>
)