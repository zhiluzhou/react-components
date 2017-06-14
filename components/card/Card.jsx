'use strict';

import React, { Component, PropTypes } from 'react';
import './card.less';

export default class Card extends Component {

    render() {
        let { style, cover, title, author, desc, readNum, likeNum, createdDate  } = this.props;
        return (
          <div style={ style } className="react-component-card">
              <img src={ cover } />
              <div>
                  <h4>
                      { title }
                  </h4>
                  <div className="author">
                      <span>{ author || '' }</span>
                  </div>
                  <p>{ desc }</p>
                  <div className="tips">
                      <i className="fa fa-eye">&nbsp;{ readNum || '-' }</i>
                      <i className="fa fa-heart">&nbsp;{ likeNum || '-' }</i>
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