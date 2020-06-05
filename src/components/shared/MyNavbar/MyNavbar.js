import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">React Hoarder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {
                  authed
                    ? <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <button className="btn nav-link">Home <span className="sr-only">(current)</span></button>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/stuff'>My Stuff</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/stuff/new'>New</Link>
                        </li>
                        <li className="nav-item">
                          <button className="btn btn-light nav-link" onClick={this.logMeOut}>Log Out</button>
                        </li>
                      </ul>
                    : ''
                }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
