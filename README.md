hawk
====
A react library for rendering graph vitalizations to show relationships

[![Build Status](https://travis-ci.org/falcon-client/hawk-graph.svg?branch=master&maxAge=2592)](https://travis-ci.org/falcon-client/hawk-graph)
[![NPM version](https://badge.fury.io/js/hawk-graph.svg?maxAge=2592)](http://badge.fury.io/js/hawk-graph)
[![Dependency Status](https://img.shields.io/david/falcon-client/hawk-graph.svg?maxAge=2592)](https://david-dm.org/falcon-client/hawk-graph)
[![npm](https://img.shields.io/npm/dm/hawk-graph.svg?maxAge=2592)](https://npm-stat.com/charts.html?package=hawk-graph)

### IDEA:
![Hawk Graph Preview](https://raw.githubusercontent.com/falcon-client/hawk/master/example/img/demo.png)


### Installation
```bash
npm install hawk-graph --save
```

### Usage
```js
const data = {
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
};

<Hawk
  data={data}
  onNodeMove={(nodeId, pos) => {}}
  onNodeStartMove={nodeId => {}}
  onNewConnector={(node1, o, node2, index) => {}}
  onRemoveConnector={connector => {}}
  onNodeSelect={nodeId => {}}
  onNodeDeselect={nodeId => {}}
/>
```
