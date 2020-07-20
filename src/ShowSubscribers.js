import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {

  onDeletedClick = (subscriberId) => {
     this.props.deleteSubscriberHandler(subscriberId);
   }

  render() {
   return (
    <div>
     <Header heading="Blog Listing" />
     <input type="text" placeholder="Search.." class="search_bar" name="search"/>
    
     <div className="component-body-container">
     <Link to="/create">
    <button className="custom-btn add-btn">Add</button>
    </Link>

    <div className="grid-container heading-container">
     <span className="grid-item name-heading">Name</span>
     <span className="grid-item phone-heading">Blog</span>
     <span className="grid-item phone-heading">Image</span>
     </div>

     {
      this.props.subscribersList.map(sub => {
        return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.blog}</span>
          <span className="grid-item">{sub.image}</span>
          <span className="grid-item action-btn-container">
           <button className="custom-btn delete-btn" onClick= {this.onDeletedClick.bind(this, sub.id)}>Delete</button>
           </span>
    </div>
  })
}
    </div>
    </div>
  );
}
}

export default ShowSubscribers;