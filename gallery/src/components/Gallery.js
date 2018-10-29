import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withLoader from './withLoader';

import './Gallery.scss';

class Gallery extends React.PureComponent {
  state = {
    idx: 3,
  };
  render() {
    const { idx } = this.state;
    const { dataList } = this.props;
    const imgElements = dataList.slice(0, idx).map((item) => {
      return <li key={item.id}><Link to={`/detail/${item.id}`}><img src={item.thumbnailUrl} /></Link></li>;
    })
    return (
      <ul className='gallery'>
        {imgElements}

        <button onClick={this.showMore}>More</button>
      </ul>
    );
  }
  showMore = () => {
    this.setState({idx: this.state.idx + 3});
  }
}

const settings = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default',
};
const url = 'https://jsonplaceholder.typicode.com/photos';

export default withLoader(url, settings)(Gallery);
