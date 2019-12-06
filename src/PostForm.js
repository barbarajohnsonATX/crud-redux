import React, { Component } from 'react';
import {connect} from 'react-redux';


class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        //grab value of title and message from input form 
        //and put them inside an object called data
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        console.log(data)
        this.props.dispatch({
            type: 'ADD_POST', 
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                    <form className="form" onSubmit={this.handleSubmit} >
                        <input required type="text" 
                            ref={(input) => this.getTitle = input}
                            placeholder="Enter Post Title" /><br /><br />
                        <textarea required 
                                rows="5" 
                                ref={(input) => this.getMessage = input}
                                cols="28" 
                                placeholder="Enter Post" /><br /><br />
                        <button>Post</button>
                    </form>
            </div>

        )
    }
}

//connect gives you access to dispatch as a prop
export default connect() (PostForm);
