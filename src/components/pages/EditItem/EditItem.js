import React from 'react';

import './EditItem.scss';

class EditItem extends React.Component {
  render() {
    const editId = this.props.match.params.itemId;
    return (
      <div className="EditItem">
        <h1>Edit Item {editId}</h1>
      </div>
    );
  }
}

export default EditItem;
