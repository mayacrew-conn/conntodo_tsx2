import React, { Component } from 'react';
import withLoader from './withLoader';

class ContactList extends Component {
  render() {
    const listElem = this.props.dataList.map((user) => {
      return <li key={user.id}>{`${user.name} (${user.email})`}</li>
    })
    return (
      <ul>
        {listElem}
      </ul>
    );
  }
}
const settings = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default',
};
const url = 'https://jsonplaceholder.typicode.com/users';

export default withLoader(url, settings)(ContactList);