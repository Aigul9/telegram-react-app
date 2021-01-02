import React, { Component } from 'react';
// import { Button } from 'reactstrap';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Like'}
        ];
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary';
            // key is required
            return (
                <button
                    key={name}
                    className={`btn ${activeClass}`}
                    onClick={() => onFilterSelect(name)}>{label}</button>
                // <Button key={name} color="info">{label}</Button>
            )
        })
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}