import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  editItemEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    this.props.history.push(`/edit/${itemId}`);
  }

  viewItemEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    this.props.history.push(`/stuff/${itemId}`);
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-secondary" onClick={this.editItemEvent}>Edit Item</button>
        <button className="btn btn-secondary" onClick={this.viewItemEvent}>View Item</button>
      </div>
    );
  }
}

export default MyStuff;
