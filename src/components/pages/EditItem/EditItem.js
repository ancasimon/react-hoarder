import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import './EditItem.scss';

class EditItem extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    stuffData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('unable to get id for editing this item', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    stuffData.putItem(itemId, updatedItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save new item:', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    const editId = this.props.match.params.itemId;
    return (
      <div className="EditItem">
        <h1>Edit Item {editId}</h1>

        <form>
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Link to photo</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
              />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.updateItem}>Update Item</button>
        </form>


      </div>
    );
  }
}

export default EditItem;
