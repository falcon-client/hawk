

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _Node = require('./lib/Node');

const _Node2 = _interopRequireDefault(_Node);

const _Spline = require('./lib/Spline');

const _Spline2 = _interopRequireDefault(_Spline);

const _SVGComponent = require('./lib/SVGComponent');

const _SVGComponent2 = _interopRequireDefault(_SVGComponent);

const _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${  typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const index = function (_React$Component) {
  _inherits(index, _React$Component);

  function index(props) {
    _classCallCheck(this, index);

    const _this = _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));

    _this.state = {
      data: _this.props.data,
      source: [],
      dragging: false
    };

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    return _this;
  }

  _createClass(index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.data });
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      this.setState({ dragging: false });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      e.stopPropagation();
      e.preventDefault();

      const svg = this.refs.svgComponent.refs.svg;

      // Get svg element position to substract offset top and left

      const svgRect = svg.getBoundingClientRect();

      this.setState({
        mousePos: {
          x: e.pageX - svgRect.left,
          y: e.pageY - svgRect.top
        }
      });
    }
  }, {
    key: 'handleNodeStart',
    value: function handleNodeStart(nid) {
      this.props.onNodeStartMove(nid);
    }
  }, {
    key: 'handleNodeStop',
    value: function handleNodeStop(nid, pos) {
      this.props.onNodeMove(nid, pos);
    }
  }, {
    key: 'handleNodeMove',
    value: function handleNodeMove(index, pos) {
      const d = this.state.data;

      d.nodes[index].x = pos.left;
      d.nodes[index].y = pos.top;

      this.setState({ data: d });
    }
  }, {
    key: 'handleStartConnector',
    value: function handleStartConnector(nid, outputIndex) {
      this.setState({ dragging: true, source: [nid, outputIndex] });
    }
  }, {
    key: 'handleCompleteConnector',
    value: function handleCompleteConnector(nid, inputIndex) {
      if (this.state.dragging) {
        const nodes = this.state.data.nodes;
        const fromNode = this.getNodebyId(nodes, this.state.source[0]);
        const fromPinName = fromNode.fields.out[this.state.source[1]].name;
        const toNode = this.getNodebyId(nodes, nid);
        const toPinName = toNode.fields.in[inputIndex].name;

        this.props.onNewConnector(fromNode.nid, fromPinName, toNode.nid, toPinName);
      }
      this.setState({ dragging: false });
    }
  }, {
    key: 'handleRemoveConnector',
    value: function handleRemoveConnector(connector) {
      if (this.props.onRemoveConnector) {
        this.props.onRemoveConnector(connector);
      }
    }
  }, {
    key: 'handleNodeSelect',
    value: function handleNodeSelect(nid) {
      if (this.props.onNodeSelect) {
        this.props.onNodeSelect(nid);
      }
    }
  }, {
    key: 'handleNodeDeselect',
    value: function handleNodeDeselect(nid) {
      if (this.props.onNodeDeselect) {
        this.props.onNodeDeselect(nid);
      }
    }
  }, {
    key: 'computePinIndexfromLabel',
    value: function computePinIndexfromLabel(pins, pinLabel) {
      let reval = 0;

      let _iteratorNormalCompletion = true;
      let _didIteratorError = false;
      let _iteratorError;

      try {
        for (var _iterator = pins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          const pin = _step.value;

          if (pin.name === pinLabel) {
            return reval;
          }
          reval++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'getNodebyId',
    value: function getNodebyId(nodes, nid) {
      let reval = 0;

      let _iteratorNormalCompletion2 = true;
      let _didIteratorError2 = false;
      let _iteratorError2;

      try {
        for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          const node = _step2.value;

          if (node.nid === nid) {
            return nodes[reval];
          }
          reval++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      const _this2 = this;

      const nodes = this.state.data.nodes;
      const connectors = this.state.data.connections;
      let _state = this.state,
          mousePos = _state.mousePos,
          dragging = _state.dragging;


      let i = 0;
      let newConnector = null;

      if (dragging) {
        const sourceNode = this.getNodebyId(nodes, this.state.source[0]);
        const connectorStart = (0, _util.computeOutOffsetByIndex)(sourceNode.x, sourceNode.y, this.state.source[1]);
        const connectorEnd = {
          x: this.state.mousePos.x,
          y: this.state.mousePos.y
        };

        newConnector = _react2.default.createElement(_Spline2.default, { start: connectorStart, end: connectorEnd });
      }

      let splineIndex = 0;

      return _react2.default.createElement(
        'div',
        { className: dragging ? 'dragging' : '' },
        nodes.map((node) => _react2.default.createElement(_Node2.default, {
            index: i++,
            nid: node.nid,
            color: '#000000',
            title: node.type,
            inputs: node.fields.in,
            outputs: node.fields.out,
            pos: { x: node.x, y: node.y },
            key: node.nid,
            onNodeStart: function onNodeStart(nid) {
              return _this2.handleNodeStart(nid);
            },
            onNodeStop: function onNodeStop(nid, pos) {
              return _this2.handleNodeStop(nid, pos);
            },
            onNodeMove: function onNodeMove(index, pos) {
              return _this2.handleNodeMove(index, pos);
            },
            onStartConnector: function onStartConnector(nid, outputIndex) {
              return _this2.handleStartConnector(nid, outputIndex);
            },
            onCompleteConnector: function onCompleteConnector(nid, inputIndex) {
              return _this2.handleCompleteConnector(nid, inputIndex);
            },
            onNodeSelect: function onNodeSelect(nid) {
              _this2.handleNodeSelect(nid);
            },
            onNodeDeselect: function onNodeDeselect(nid) {
              _this2.handleNodeDeselect(nid);
            }
          })),
        _react2.default.createElement(
          _SVGComponent2.default,
          { height: '100%', width: '100%', ref: 'svgComponent' },
          connectors.map((connector) => {
            const fromNode = _this2.getNodebyId(nodes, connector.from_node);
            const toNode = _this2.getNodebyId(nodes, connector.to_node);

            const splinestart = (0, _util.computeOutOffsetByIndex)(fromNode.x, fromNode.y, _this2.computePinIndexfromLabel(fromNode.fields.out, connector.from));
            const splineend = (0, _util.computeInOffsetByIndex)(toNode.x, toNode.y, _this2.computePinIndexfromLabel(toNode.fields.in, connector.to));

            return _react2.default.createElement(_Spline2.default, {
              start: splinestart,
              end: splineend,
              key: splineIndex++,
              mousePos,
              onRemove: function onRemove() {
                _this2.handleRemoveConnector(connector);
              }
            });
          }),
          newConnector
        )
      );
    }
  }]);

  return index;
}(_react2.default.Component);

exports.default = index;