import React, { Component } from 'react';
import { API_ROOT } from './api-config';

class GuestBook extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const target = event.target;
    const data = new FormData(event.target);
        

    fetch( API_ROOT + '/api/signatures', {
      method: 'POST',
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({
        "signature": data.get('guestSignature'),
        "message": data.get('message')
      })
    })
    .then(res => res.json())
    .then(function(data){
      console.log('success')
      console.log(data);
      target.reset();
    })
    

  }

  render() {
    return(
    <div className="guestBook">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="guestSignature">Name</label>
        <input name="guestSignature" type="text" /><br />

        <label htmlFor="message">Message</label>
        <input name="message" type="text" /><br />
        <button> Submit </button>
      </form>
    </div>
    )
  }

}

export default GuestBook;