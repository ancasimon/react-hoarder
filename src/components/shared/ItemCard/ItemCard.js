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

    return (
      <div className="ItemCard col-6">
        <div className="card">
          <div class="card-header">
            {item.itemName}
          </div>
          <div class="card-body">
            <img src={item.itemImage} alt="stuff I hoard" className="stuffImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
