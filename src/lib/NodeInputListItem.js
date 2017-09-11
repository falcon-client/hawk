import React, { Component } from 'react';

export default class NodeInputListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseUp(e) {
    e.stopPropagation();
    e.preventDefault();

    this.props.onMouseUp(this.props.index);
  }

  onMouseOver() {
    this.setState({ hover: true });
  }

  onMouseOut() {
    this.setState({ hover: false });
  }

  noop(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const { name } = this.props.item;
    const { hover } = this.state;

    return (
      <li>
        <a
          onClick={e => this.noop(e)}
          onMouseUp={e => this.onMouseUp(e)}
          href="#"
        >
          <i
            className={hover ? 'fa fa-circle-o hover' : 'fa fa-circle-o'}
            onMouseOver={() => {
              this.onMouseOver();
            }}
            onMouseOut={() => {
              this.onMouseOut();
            }}
          />
          {name}
        </a>
      </li>
    );
  }
}
