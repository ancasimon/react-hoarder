import React from 'react';

import ItemCard from '../../shared/ItemCard/ItemCard';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getStuff = () => {
    const uid = authData.getUid();
    stuffData.getStuffByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('unable to get items: ', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  removeItem = (itemId) => {
    stuffData.deleteItem(itemId)
      .then(() => this.getStuff())
      .catch((err) => console.error('unable to delete from My Stuff page', err));
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item} removeItem={this.removeItem} />
    ));
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
          <div className="d-flex flex-wrap">
            {buildItemCards}
          </div>
      </div>
    );
  }
}

export default MyStuff;
