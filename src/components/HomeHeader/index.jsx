import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.styl'

class HomeHeader extends Component {
  render () {
    return (
      <header>
        <h2 className="title">{this.props.title}</h2>
        {/* TODO: 在 state 中传参，传递链接名称 */}
        <div className="link">
          <Link to="room">空闲教室</Link>
          <Link to="info">今日校园</Link>
        </div>
      </header>
    )
  }
}

export default HomeHeader
