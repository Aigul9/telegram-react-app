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
            {label: 'First post', important: true, like: false, id: nextId()},
            {label: 'Second post', important: false, like: false, id: nextId()},
            {label: 'Third post', important: false, like: false, id: nextId()}
        ],
        term: '' // search
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

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

    onToggleImportant = (id) => {
        console.log("important", id);
        return this.onToggle("important", id);
    }

    onToggleLike = (id) => {
        console.log("like", id);
        return this.onToggle("like", id);
    }

    onToggle(field, id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newObject = {...old, [field]: !old[field]}; // old object with changed property
            // we are not allowed to change current state
            const newArr = [...data.slice(0, index), newObject, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost = (items, term) => {
        // if user just opened the app or deleted the text
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) !== -1);
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.searchPost(data, term);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}