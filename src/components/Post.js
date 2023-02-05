import React, { Component } from 'react';

import Comment from './Comment';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        }

        this.handlSubmit = this.handlSubmit.bind(this);
        this.handlTextChange = this.handlTextChange.bind(this);
    }

    handlSubmit(e) {
        e.preventDefault();

        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({ newCommentText: '' })
    }
    handlTextChange(e) {
        e.preventDefault();

        this.setState({ newCommentText: e.target.value })
    }




    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <form onSubmit={this.handlSubmit}>

                    <div className="row">
                        <div className="input-field col s12">
                        <label>Comment</label>
                            <input                            
                            type="text" 
                            value={this.state.newCommentText}
                            onChange={this.handlTextChange}
                            className="validate"
                            />
                            
                        </div>
                    </div>

                    <button type="submit" className="waves-effect waves-light btn">
                        <i className="material-icons left">add</i>Comentar
                    </button>
                </form>


                        {this.state.comments.map((comment, index) => {
                            return <Comment key={index} text={comment.text} />
                        })}
                    </div>
                    );
                }
            }
