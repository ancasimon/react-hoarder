import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="ItemCard col-6">
        <div className="card">
          <div class="card-header">
            {item.itemName}
          </div>
          <div class="card-body">
            <img src={item.itemImage} alt="stuff I hoard" className="stuffImage" />
            <div className="row justify-content-center">
              <Link className="btn btn-secondary itemButton" to={singleLink}>View</Link>
              <Link className="btn btn-dark itemButton" to={editLink}>Edit</Link>
              <button className="btn btn-danger itemButton">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
