import React from 'react';
import Error from '../../pages/Error';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { errorMessage: false };
    }
  
    static getDerivedStateFromError(error) {
      return { errorMessage: error.toString() };
    }
  
    render() {
      if (this.state.errorMessage) return <Error errorMessage={this.state.errorMessage}/>
      else return this.props.children; 
    }
  }

  export default ErrorBoundary;