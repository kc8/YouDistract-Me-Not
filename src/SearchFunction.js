import React, { Component } from 'react';
import logo from './logo.svg';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', 
                YouTubeURL: 'https://www.youtube.com/results?search_query='}; 

    //Have to find the method to 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { 
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location = this.state.YouTubeURL + this.state.value; 
  }

  render() {
  return (
    <div className="row turn" style={{backgroundColor: "white"}}>
    <div className='col-4 offset-1'></div>
        <div className="form-inline md-form mr-auto mb-4">
            <form onSubmit={this.handleSubmit}>
            <input type="text" 
                    className="form-control mr-sm-2"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            <input className="btn btn-unique btn-rounded btn-sm my-0" 
                        type="submit" 
                        value="Search"
                        />
            </form>
            </div>
        
    </div>
    );
}}


export default SearchForm;