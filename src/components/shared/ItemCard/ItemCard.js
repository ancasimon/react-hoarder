import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import itemShape from '../../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  deleteItem = (itemId) => {
    const { removeItem } = this.props;
    removeItem(itemId);
  }

  deleteConfirmation = () => {
    const { item } = this.props;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          this.deleteItem(item.id),
        );
      }
    });
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="ItemCard col-6">
        <div className="card">
          <div className="card-header">
            {item.itemName}
          </div>
          <div className="card-body">
            <img src={item.itemImage} alt="stuff I hoard" className="stuffImage" />
            <div className="row justify-content-center">
              <Link className="btn btn-secondary itemButton" to={singleLink}>View</Link>
              <Link className="btn btn-dark itemButton" to={editLink}>Edit</Link>
              <button className="btn btn-danger itemButton" onClick={ () => {
                this.deleteConfirmation();
              }
              }>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
