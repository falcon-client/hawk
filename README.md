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
```
