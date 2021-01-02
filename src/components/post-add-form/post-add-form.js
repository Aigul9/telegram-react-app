import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {

    state = {
        text: ''
    };

    onValueChange = (e) => {
        console.log(e.target.value);
        // without callback, because new value does not depend on previous inputs
        // setState always accepts an object
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;
        if (text) {
            this.props.onAdd(text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            // contolled components: input, textarea, select
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="What are your thoughts?"
                    className="form-control new-post-label"   
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}