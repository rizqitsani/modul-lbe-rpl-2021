import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log('%c    Child: constructor', 'color: MediumSpringGreen');

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('%c    Child: componentDidMount', 'color: tomato');
  }

  componentDidUpdate() {
    console.log('%c    Child: componentDidUpdate', 'color: LightCoral');
  }

  componentWillUnmount() {
    console.log(
      '%c    Child: componentWillUnmount🧹',
      'color: MediumTurquoise'
    );
  }

  render() {
    console.log('%c    Child: render', 'color: MediumSpringGreen');

    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        {this.state.count}
      </button>
    );
  }
}

export default class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('%cApp: constructor', 'color: MediumSpringGreen');

    this.state = {
      showChild: false,
    };
  }

  componentDidMount() {
    console.log('%cApp: componentDidMount', 'color: tomato');
  }

  componentDidUpdate() {
    console.log('%cApp: componentDidUpdate', 'color: LightCoral');
  }

  componentWillUnmount() {
    console.log('%cApp: componentWillUnmount🧹', 'color: MediumTurquoise');
  }

  render() {
    console.log('%cApp: render', 'color: MediumSpringGreen');

    return (
      <>
        <label>
          <input
            type='checkbox'
            checked={this.state.showChild}
            onChange={(e) => {
              this.setState({ showChild: !this.state.showChild });
            }}
          />{' '}
          show child
        </label>
        <div
          style={{
            padding: 10,
            margin: 10,
            height: 50,
            width: 50,
            border: 'solid',
          }}
        >
          {this.state.showChild ? <Child /> : null}
        </div>
      </>
    );
  }
}
