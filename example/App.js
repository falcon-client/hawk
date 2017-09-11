import React, { Component } from 'react';
import Hawk from '../src/';
// For your app, import Hawk like so
// import Hawk from 'hawk-graph';

export default class App extends Component {
  state = {
    nodes: [
      {
        nid: 1,
        type: 'Users',
        x: 200,
        y: 100,
        fields: {
          in: [
            { name: 'user_id' },
            { name: 'role_id' },
          ],
          out: [{ name: 'out' }]
        }
      },
      {
        nid: 2,
        type: 'Photos',
        x: 800,
        y: 100,
        fields: {
          in: [
            { name: 'user_id' },
            { name: 'photo' },
          ],
          out: [{ name: 'out' }]
        }
      },
      {
        nid: 3,
        type: 'Role',
        x: 400,
        y: 500,
        fields: {
          in: [
            { name: 'user_id' },
            { name: 'role' },
          ],
          out: [{ name: 'out' }]
        }
      }
    ],
    connections: [
      { from_node: 1, from: 'out', to_node: 2, to: 'user_id' },
      { from_node: 2, from: 'out', to_node: 3, to: 'user_id' },
    ]
  }

  onNewConnector(fromNode, fromPin, toNode, toPin) {
    let connections = [
      ...this.state.connections,
      {
        from_node: fromNode,
        from: fromPin,
        to_node: toNode,
        to: toPin
      }
    ];

    this.setState({ connections: connections });
  }

  onRemoveConnector(connector) {
    let connections = [...this.state.connections];
    connections = connections.filter(connection => {
      return connection != connector;
    });

    this.setState({ connections: connections });
  }

  onNodeMove(nid, pos) {
    console.log('end move : ' + nid, pos);
  }

  onNodeStartMove(nid) {
    console.log('start move : ' + nid);
  }

  handleNodeSelect(nid) {
    console.log('node selected : ' + nid);
  }

  handleNodeDeselect(nid) {
    console.log('node deselected : ' + nid);
  }

  render() {
    return (
      <Hawk
        data={this.state}
        onNodeMove={(nid, pos) => this.onNodeMove(nid, pos)}
        onNodeStartMove={nid => this.onNodeStartMove(nid)}
        onNewConnector={(n1, o, n2, i) => this.onNewConnector(n1, o, n2, i)}
        onRemoveConnector={connector => this.onRemoveConnector(connector)}
        onNodeSelect={nid => {
          this.handleNodeSelect(nid);
        }}
        onNodeDeselect={nid => {
          this.handleNodeDeselect(nid);
        }}
      />
    );
  }
}
