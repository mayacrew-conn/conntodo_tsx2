import React from 'react';

const withLoader = (url, settings) => (WrappedComponent) => {
  return class LoadIndicator extends React.Component {
    state = {
      dataList: null,
    };
    componentDidMount() {
      window.setTimeout(() => {
        fetch(url, settings).then((response) => response.json()).then((dataList) =>
          this.setState({
            dataList,
          })
        );
      }, 1000);
    }
    render() {
      return this.state.dataList === null ? (
        <div className='loader'>Loading...</div>
      ) : (
        <WrappedComponent {...this.props} {...this.state} />
      );
    }
  };
};

export default withLoader;