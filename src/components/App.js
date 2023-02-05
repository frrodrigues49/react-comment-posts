import React, { Component } from 'react';

import Post from './Post';


export default class components extends Component {
    render() {
        return (
            <div className="container">
                <h1>Helo Word</h1>

                <Post title="Post 01"/>               
                <Post title="Post 02"/>               
                <Post title="Post 03"/>               
            </div>
        );
    }
}
