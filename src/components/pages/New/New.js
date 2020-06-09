import React from 'react';

import authData from '../../../helpers/data/authData';

import stuffData from '../../../helpers/data/stuffData';

import './New.scss';


class New extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
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

  saveItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    stuffData.postNewStuff(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save new item:', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="New">
        <h1>Go ahead, tell us: What's the latest gimmick you bought?</h1>

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
          <button type="submit" className="btn btn-primary" onClick={this.saveItem}>Save New Item</button>
        </form>

      </div>
    );
  }
}

export default New;
