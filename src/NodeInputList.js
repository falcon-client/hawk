import React from 'react';
import NodeInputListItem from './NodeInputListItem';

export default class NodeInputList extends React.Component {
  onMouseUp(i) {
    this.props.onCompleteConnector(i);
  }

  render() {
    return (
      <div className="nodeInputWrapper">
        <ul className="nodeInputList">
          {this.props.items.map((item, i) => (
            <NodeInputListItem
              onMouseUp={i => this.onMouseUp(i)}
              key={i}
              index={i}
              item={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}
