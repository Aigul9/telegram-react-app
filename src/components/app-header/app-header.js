import React from 'react';

import name from '../../variables';

import './app-header.css'

const AppHeader = () => {
    return (
        <div className="app-header d-flex">
            <h1>{name}</h1>
            <h2>0 saved notes out of 5</h2>
        </div>
    )
};

export default AppHeader;