import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class GalleryDetail extends React.PureComponent {
  state = {
    img: null
  }
  render() {
    const { img } = this.state;
    if (img === null) {
      return <h2>Loading....</h2>
    }
    return (
      <div>
        <button onClick={this.handleClickBack}>back</button>
        <h3>{img.title}</h3>
        <img src={img.url} alt={img.title} />
      </div>
    )
  }
  componentDidMount() {
    this.getImage();
  }
  getImage = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`);
    this.setState({img: response.data});
  }
  handleClickBack = () => {
    this.props.history.push('/');
  }
}

export default withRouter(GalleryDetail);