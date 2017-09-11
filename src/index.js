import React from 'react';
import Node from './Node';
import Spline from './Spline';
import SVGComponent from './SVGComponent';
import { computeOutOffsetByIndex, computeInOffsetByIndex } from './util';

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      source: [],
      dragging: false
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }

  onMouseUp(e) {
    this.setState({ dragging: false });
  }

  onMouseMove(e) {
    e.stopPropagation();
    e.preventDefault();

    const { svgComponent: { refs: { svg } } } = this.refs;

    // Get svg element position to substract offset top and left
    const svgRect = svg.getBoundingClientRect();

    this.setState({
      mousePos: {
        x: e.pageX - svgRect.left,
        y: e.pageY - svgRect.top
      }
    });
  }

  handleNodeStart(nid) {
    this.props.onNodeStartMove(nid);
  }

  handleNodeStop(nid, pos) {
    this.props.onNodeMove(nid, pos);
  }

  handleNodeMove(index, pos) {
    const d = this.state.data;

    d.nodes[index].x = pos.left;
    d.nodes[index].y = pos.top;

    this.setState({ data: d });
  }

  handleStartConnector(nid, outputIndex) {
    this.setState({ dragging: true, source: [nid, outputIndex] });
  }

  handleCompleteConnector(nid, inputIndex) {
    if (this.state.dragging) {
      const nodes = this.state.data.nodes;
      const fromNode = this.getNodebyId(nodes, this.state.source[0]);
      const fromPinName = fromNode.fields.out[this.state.source[1]].name;
      const toNode = this.getNodebyId(nodes, nid);
      const toPinName = toNode.fields.in[inputIndex].name;

      this.props.onNewConnector(
        fromNode.nid,
        fromPinName,
        toNode.nid,
        toPinName
      );
    }
    this.setState({ dragging: false });
  }

  handleRemoveConnector(connector) {
    if (this.props.onRemoveConnector) {
      this.props.onRemoveConnector(connector);
    }
  }

  handleNodeSelect(nid) {
    if (this.props.onNodeSelect) {
      this.props.onNodeSelect(nid);
    }
  }

  handleNodeDeselect(nid) {
    if (this.props.onNodeDeselect) {
      this.props.onNodeDeselect(nid);
    }
  }

  computePinIndexfromLabel(pins, pinLabel) {
    let reval = 0;

    for (const pin of pins) {
      if (pin.name === pinLabel) {
        return reval;
      }
      reval++;
    }
  }

  getNodebyId(nodes, nid) {
    let reval = 0;

    for (const node of nodes) {
      if (node.nid === nid) {
        return nodes[reval];
      }
      reval++;
    }
  }

  render() {
    const nodes = this.state.data.nodes;
    const connectors = this.state.data.connections;
    const { mousePos, dragging } = this.state;

    let i = 0;
    let newConnector = null;

    if (dragging) {
      const sourceNode = this.getNodebyId(nodes, this.state.source[0]);
      const connectorStart = computeOutOffsetByIndex(
        sourceNode.x,
        sourceNode.y,
        this.state.source[1]
      );
      const connectorEnd = {
        x: this.state.mousePos.x,
        y: this.state.mousePos.y
      };

      newConnector = <Spline start={connectorStart} end={connectorEnd} />;
    }

    let splineIndex = 0;

    return (
      <div className={dragging ? 'dragging' : ''}>
        {nodes.map(node => (
          <Node
            index={i++}
            nid={node.nid}
            color="#000000"
            title={node.type}
            inputs={node.fields.in}
            outputs={node.fields.out}
            pos={{ x: node.x, y: node.y }}
            key={node.nid}
            onNodeStart={nid => this.handleNodeStart(nid)}
            onNodeStop={(nid, pos) => this.handleNodeStop(nid, pos)}
            onNodeMove={(index, pos) => this.handleNodeMove(index, pos)}
            onStartConnector={(nid, outputIndex) =>
              this.handleStartConnector(nid, outputIndex)}
            onCompleteConnector={(nid, inputIndex) =>
              this.handleCompleteConnector(nid, inputIndex)}
            onNodeSelect={nid => {
              this.handleNodeSelect(nid);
            }}
            onNodeDeselect={nid => {
              this.handleNodeDeselect(nid);
            }}
          />
        ))}

        {/* render our connectors */}

        <SVGComponent height="100%" width="100%" ref="svgComponent">
          {connectors.map(connector => {
            const fromNode = this.getNodebyId(nodes, connector.from_node);
            const toNode = this.getNodebyId(nodes, connector.to_node);

            const splinestart = computeOutOffsetByIndex(
              fromNode.x,
              fromNode.y,
              this.computePinIndexfromLabel(fromNode.fields.out, connector.from)
            );
            const splineend = computeInOffsetByIndex(
              toNode.x,
              toNode.y,
              this.computePinIndexfromLabel(toNode.fields.in, connector.to)
            );

            return (
              <Spline
                start={splinestart}
                end={splineend}
                key={splineIndex++}
                mousePos={mousePos}
                onRemove={() => {
                  this.handleRemoveConnector(connector);
                }}
              />
            );
          })}

          {/* this is our new connector that only appears on dragging */}
          {newConnector}
        </SVGComponent>
      </div>
    );
  }
}
