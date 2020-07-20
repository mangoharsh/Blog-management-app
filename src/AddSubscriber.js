import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSusbscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            blog: '',
            image:''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', blog: ' ', image: '' });
        this.props.history.push("/");
    }

    render() {

        const { name, blog, image } = this.state;

        return (
            <div>
                <Header heading="Create Blog" />
                <div className="component-body-container">
                    <Link to="/">
                        <button className="custom-btn">Back</button>
                    </Link>

                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label><br />
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor="blog" className="label-control">Blog: </label><br />
                        <textarea id="blog" name="blog" rows="4" cols="50" onChange={this.inputChangedHandler}></textarea><br /><br />
                        <label htmlFor="image" className="label-control">Image Location: </label><br />
                        <input id="image" alt="blogger image" type="text" className="input-control" name="image" onChange={this.inputChangedHandler} /><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
                            <span className="subscriber-info">Name: {name}</span><br />
                            <span className="subscriber-info">Blog: {blog}</span><br />
                            <span className="subscriber-info">Image: {image}</span><br />
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSusbscriber;