import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import stuffData from '../../../helpers/data/stuffData';

import './Single.scss';

class Single extends React.Component {
  state = {
    item: {},
    currentpath: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data, currentpath: this.props.location.pathname }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    stuffData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to delete item from single view page', err));
  }

  deleteConfirmation = () => {
    const { itemId } = this.props.match.params;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ab7ca',
      cancelButtonColor: '#fe4a49',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          this.removeItem(itemId),
        );
      }
    });
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const { currentpath } = this.state;
    console.log('current path on Single page', currentpath);
    const editLink = `/edit/${itemId}`;
    const stuff = '/stuff';
    const newroute = { pathname: `/edit/${itemId}`, previouspath: { currentpath } };

    return (
      <div className="Single container">
        <div className="row justify-content-center">
          <Link className="btn btn-dark col-md-3 m-2" to={stuff}>Back</Link>
          <div className="row col-12 justify-content-center">
            <Link className="btn yellowButton col-3 m-2" to={newroute}>Edit</Link>
            <button className="btn redButton col-3 m-2" onClick={this.deleteConfirmation}>Delete</button>
          </div>
          </div>
        <h1>{item.itemName}</h1>
        <p>{item.itemDescription}</p>
        <img src={item.itemImage} className="singleViewImage" alt="stuff I hoard" />

      </div>
    );
  }
}

export default Single;
