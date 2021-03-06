'use strict';
import React, { Component, PropTypes } from 'react';
import './tag.less';
import * as types from './constant';
import StyleComponentWrapper from '../hoc/StyleComponentWrapper.jsx';
import ClickComponentWrapper from '../hoc/ClickComponentWrapper.jsx';
import HoverComponentWrapper from '../hoc/HoverComponentWrapper.jsx';
import { withWrapper } from '../hoc/wrapper.js';

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
    }

    handleOnClick = name => {
        return () => {
            this.setState({ selected: !this.state.selected });
            this.props.onClick && this.props.onClick(name);
        };
    };

    __classname__ = () => {
        let classes = [];
        let type = this.props.type;
        if (type === types.TAG_TYPE_COMMON) classes.push('react-component-tag');
        if (type === types.TAG_TYPE_ARROW) classes.push('react-component-arrow-tag');
        if (type === types.TAG_TYPE_HONEYCOMB) classes.push('react-component-honeycomb-tag');
        if (this.state.selected) classes.push('selected');

        return classes.join(' ').trim();
    };

    render() {
        return (
            <span className={ this.__classname__()  } style={ this.props.style }
                  onClick={ this.handleOnClick(this.props.name) } >
                { this.props.name }
            </span>
        );
    }
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf([
        types.TAG_TYPE_COMMON,
        types.TAG_TYPE_ARROW,
        types.TAG_TYPE_HONEYCOMB
    ]),
    onClick: PropTypes.func
};

Tag.defaultProps = {
    type: types.TAG_TYPE_COMMON
};

export default withWrapper(StyleComponentWrapper, ClickComponentWrapper, HoverComponentWrapper)(Tag);