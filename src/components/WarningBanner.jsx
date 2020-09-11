import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
    return (
        <div className="warning bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">Warning!</p>
            <p>This is a test.</p>
        </div>
    );
  }
  
 class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
}

export {WarningBanner, Page};