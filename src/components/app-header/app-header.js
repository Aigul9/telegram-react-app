import React from 'react';

import name from '../../variables';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? '#7daecc' : '#005533'};
        :hover {
            color: #d6aaad;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: gray;
    }
`;

const AppHeader = () => {
    return (
        // use as link
        <Header colored as="a">
            <h1>{name}</h1>
            <h2>0 saved notes out of 5</h2>
        </Header>
    )
};

export default AppHeader;