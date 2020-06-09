import React from 'react';
import { Link } from 'react-router-dom';

import stuffData from '../../../helpers/data/stuffData';

import './Single.scss';

class Single extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  render() {
    const { item } = this.state;
    const stuff = '/stuff';

    return (
      <div className="Single container">
        <Link className="btn btn-danger" to={stuff}>Back</Link>
        <h1>{item.itemName}</h1>
        <p>{item.itemDescription}</p>
        <img src={item.itemImage} alt="stuff I hoard" />

      </div>
    );
  }
}

export default Single;
