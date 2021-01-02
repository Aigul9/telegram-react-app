import React, { Component } from 'react';

import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// incapsulation
// import style from './App.module.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;    
`;

// make a new component based on another
// const StyledAppBlock = styled(AppBlock)`
//     background-color: gray`;

export default class App extends Component {

    state = {
        data: [
            {label: 'First post', important: true, id: nextId()},
            {label: 'Second post', important: false, id: nextId()},
            {label: 'Third post', important: false, id: nextId()}
        ]
    }

    maxId = 4;

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // // copy instead
            // // we are not allowed to change current state
            // const before = data.slice(0, index),
            //       after = data.slice(index + 1);
            
            // const newArr = [...before, ...after]; //spread

            console.log(id);

            return {
                data: data.filter(elem => elem.id !== id)
            };
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
        console.log(newItem);
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}