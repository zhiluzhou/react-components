'use strict';

import React, { Component, PropTypes } from 'react';
import './card.less';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';

class Card extends Component {

    handleFilter = num => num >= 1000 ? (num / 1000).toFixed(1) + 'k+' : num;

    handleOnClick = () => {
        this.props.onClick && this.props.onClick()
    };

    render() {
        let { style, cover, title, author, desc, readNum, likeNum, createdDate  } = this.props;
        return (
          <div style={ style } className="react-component-card" onClick={ this.handleOnClick }>
              <img src={ cover } />
              <div>
                  <h4 title={ title }>
                      { title }
                  </h4>
                  <div className="author">
                      <span title={ author }>{ author || '' }</span>
                  </div>
                  <p title={ desc }>{ desc }</p>
                  <div className="tips">
                      <i className="fa fa-eye">&nbsp;{ this.handleFilter(readNum) || '-' }</i>
                      <i className="fa fa-heart">&nbsp;{ this.handleFilter(likeNum) || '-' }</i>
                      <i className="fa fa-calendar-plus-o">&nbsp;{ createdDate || '-' }</i>
                  </div>
              </div>
          </div>
        );
    }
}

Card.propTypes = {
    cover:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string,
    style:PropTypes.object,
    desc:PropTypes.string,
    readNum:PropTypes.string,
    likeNum:PropTypes.string,
    createdDate:PropTypes.string,
    onClick:PropTypes.func
};

export default PseudoClassComponentWrapper(Card);